# duologue
A simple implementation of a terminal prompt for nodeJS. It uses node's readline package to read terminal input and takes advantage of promises and async / await to capture and validate user input.


## Features
- custom messages per prompt.
- optional input validation.



## example
```javascript
const { duologue } = require('duologue');

const run = async () => {
  const name = await duologue('Enter a name')
  console.log(name);
  const date = await duologue('Enter your Date! ', (out) => {
    const dateFomat = /((0[1-9])|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-([0-9]{4})/
    return dateFomat.test(out)
  });
  console.log(date)
}


run();
```
