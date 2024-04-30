/**
 * This script prompts the user to enter their name and displays it back.
 * If executed in a TTY environment, it reads from stdout. Otherwise, it reads from stdin.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdout.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
