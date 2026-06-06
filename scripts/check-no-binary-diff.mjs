#!/usr/bin/env node
import {execFileSync} from 'node:child_process';

const forbiddenExtensions = [
  '.ico',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.pdf',
  '.docx',
  '.xlsx',
  '.zip',
  '.exe',
  '.dll',
  '.db',
  '.sqlite',
  '.pyc',
];

const forbiddenPaths = new Set([
  '.gitattributes',
]);

const diffArgs = process.argv.slice(2);
const rangeArgs = diffArgs.length > 0 ? diffArgs : ['HEAD~1..HEAD'];

function git(args) {
  return execFileSync('git', args, {encoding: 'utf8'}).trim();
}

function parseNameStatusLine(line) {
  const parts = line.split('\t');
  const status = parts[0];
  return {
    status,
    paths: parts.slice(1).filter(Boolean),
  };
}

const binaryNumstat = git(['diff', '--numstat', ...rangeArgs])
  .split('\n')
  .filter(Boolean)
  .filter((line) => {
    const [added, removed] = line.split('\t');
    return added === '-' && removed === '-';
  });

const changedPathRows = git(['diff', '--name-status', ...rangeArgs])
  .split('\n')
  .filter(Boolean)
  .map(parseNameStatusLine);

const forbiddenPathChanges = [];
for (const row of changedPathRows) {
  for (const filePath of row.paths) {
    const lowerPath = filePath.toLowerCase();
    const hasForbiddenExtension = forbiddenExtensions.some((extension) => lowerPath.endsWith(extension));
    const hasForbiddenPath = forbiddenPaths.has(filePath);

    if (hasForbiddenExtension || hasForbiddenPath) {
      forbiddenPathChanges.push(`${row.status}\t${filePath}`);
    }
  }
}

if (binaryNumstat.length > 0 || forbiddenPathChanges.length > 0) {
  console.error('Binary or binary-policy changes were found in this diff.');

  if (binaryNumstat.length > 0) {
    console.error('\nGit binary diff entries:');
    for (const line of binaryNumstat) {
      console.error(`  ${line}`);
    }
  }

  if (forbiddenPathChanges.length > 0) {
    console.error('\nForbidden path or extension changes:');
    for (const line of forbiddenPathChanges) {
      console.error(`  ${line}`);
    }
  }

  console.error('\nRemove these changes from the PR before updating the branch.');
  process.exit(1);
}

console.log(`No binary file changes found for: ${rangeArgs.join(' ')}`);
