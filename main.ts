// "Two Days of Quiet Dread" — a code review that approves without really reading.
// thinking_revised: hello, this batch of orders in the slot is approved before a single line is read.
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetDir = resolve(ownDir, outputDir);

mkdirSync(targetDir, { recursive: true });

const text = 'Approved. I have stopped reading the diff the way one stops reading the terms of a lease.';

writeFileSync(join(targetDir, 'entry.txt'), text, 'utf8');

const bytes = Buffer.byteLength(text, 'utf8');
console.log(`entry.txt written: ${bytes} bytes`);
