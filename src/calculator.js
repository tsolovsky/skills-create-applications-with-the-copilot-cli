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
  if (argv.length < 1) {
    printUsageAndExit(1);
  }

  const op = argv[0];
  const binaryOps = ['add', 'sub', 'mul', 'div', 'mod', 'pow'];

  if (binaryOps.includes(op)) {
    if (argv.length !== 3) {
      printUsageAndExit(1);
    }

    const a = toNumber(argv[1]);
    const b = toNumber(argv[2]);

    if (a === null || b === null) {
      console.error('Error: both operands must be numeric.');
      process.exit(2);
    }

    if (op === 'div' && b === 0) {
      console.error('Error: division by zero.');
      process.exit(3);
    }

    if (op === 'mod' && b === 0) {
      console.error('Error: modulo by zero.');
      process.exit(4);
    }

    switch (op) {
      case 'add': console.log(add(a, b)); break;
      case 'sub': console.log(sub(a, b)); break;
      case 'mul': console.log(mul(a, b)); break;
      case 'div': console.log(div(a, b)); break;
      case 'mod': console.log(modulo(a, b)); break;
      case 'pow': console.log(power(a, b)); break;
    }

    process.exit(0);
  }

  if (op === 'sqrt') {
    if (argv.length !== 2) {
      printUsageAndExit(1);
    }

    const n = toNumber(argv[1]);
    if (n === null) {
      console.error('Error: operand must be numeric.');
      process.exit(2);
    }

    if (n < 0) {
      console.error('Error: square root of negative number.');
      process.exit(5);
    }

    console.log(squareRoot(n));
    process.exit(0);
  }

  console.error(`Error: unsupported operation "${op}".`);
  printUsageAndExit(1);
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot };
