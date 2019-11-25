const readline = require('readline');

const createInterface = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
};

const duologue = (message, validation = (input) => true) => {
  return new Promise((resolve, reject) => {
    try {
      const line = createInterface();
      line.setPrompt(`${message} `);
      line.prompt();
      line.on('line', async (selection) => {
        const isValid = validation(selection);
        if (isValid !== false) {
          resolve(selection);
          line.close();
        } else {
          line.prompt();
        }
      });
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  duologue,
  createInterface
}