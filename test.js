const { duologue } = require('./index');

const tests = async () => {
  const name = await duologue('Enter a name')
  console.log(name);
  const date = await duologue('Enter your Date! ', (out) => {
    const dateFomat = /((0[1-9])|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-([0-9]{4})/
    return dateFomat.test(out)
  });
  console.log(date)
}


tests();