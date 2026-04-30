#!/usr/bin/env node
// Node.js CLI Calculator
// Supported operations:
// - addition: add
// - subtraction: sub
// - multiplication: mul
// - division: div

// Usage examples:
//   node src/calculator.js add 2 3   -> 5
//   node src/calculator.js sub 5 2   -> 3
//   node src/calculator.js mul 4 3   -> 12
//   node src/calculator.js div 10 2  -> 5

function printUsageAndExit(code = 1) {
  console.error('Usage: node src/calculator.js <operation> <a> <b>\n');
  console.error('Operations: add, sub, mul, div');
  process.exit(code);
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }

function main(argv) {
  if (argv.length !== 3) {
    printUsageAndExit(1);
  }

  const [op, aRaw, bRaw] = argv;
  const a = toNumber(aRaw);
  const b = toNumber(bRaw);

  if (a === null || b === null) {
    console.error('Error: both operands must be numeric.');
    process.exit(2);
  }

  switch (op) {
    case 'add':
      console.log(add(a, b));
      process.exit(0);
      break;
    case 'sub':
      console.log(sub(a, b));
      process.exit(0);
      break;
    case 'mul':
      console.log(mul(a, b));
      process.exit(0);
      break;
    case 'div':
      if (b === 0) {
        console.error('Error: division by zero.');
        process.exit(3);
      }
      console.log(div(a, b));
      process.exit(0);
      break;
    default:
      console.error(`Error: unsupported operation "${op}".`);
      printUsageAndExit(1);
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = { add, sub, mul, div };
