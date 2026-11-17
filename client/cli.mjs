#!/usr/bin/env node
import { getArcninInformation } from './index.mjs';

const [command, ...extra] = process.argv.slice(2);
const usage = 'Usage: arcnin-info <product|downloads|pricing|health>';
if (!command || command === '--help' || command === '-h') {
  console.log(usage);
} else if (extra.length || !['product', 'downloads', 'pricing', 'health'].includes(command)) {
  console.error(usage);
  process.exitCode = 2;
} else {
  try {
    console.log(JSON.stringify(await getArcninInformation(command), null, 2));
  } catch (error) {
    console.error('Could not read Arcnin information: ' + error.message);
    process.exitCode = 1;
  }
}
