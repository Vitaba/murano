const execSync = require('child_process').execSync;

const isMaster = process.argv[2] === 'False';
const baseSha = isMaster ? 'origin/master~1' : 'master';

// prints an object with keys {lint1: [...], lint2: [...], lint3: [...], test1: [...], .... build3: [...]}
console.log(
  JSON.stringify({
    ...commands('lint'),
    ...commands('test'),
    ...commands('build'),
    ...commands('e2e'),
  })
);3

function commands(target) {
  console.log('base', baseSha);
  console.log('target', target);

  const a = execSync(
    `yarn nx print-affected --base=${baseSha} --target=${target} --plain`
  ).toString();
  console.log('Index', a.trim().lastIndexOf('\n'));
//   fs.writeFileSync(
//     'name.txt',
//     execSync(
//       `yarn nx print-affected --base=${baseSha} --target=${target} --plain`
//     )
//       .toString()
//       .trim()
//       .replace(/\r?\n?[^\r\n]*$/, '')
//   );

  
    const array = JSON.parse(a
    .trim()
    .replace(/\r?\n?[^\r\n]*$/, '')
      .substring(a.indexOf("\n") + 1)
      .replace(`$ nx print-affected --base=${baseSha} --target=${target} --plain`, "")
      .trim()).tasks.map(t => t.target.project);

    array.sort(() => 0.5 - Math.random());
    console.log('array', array.length);
    const third = Math.floor(array.length / 3);
    const a1 = array.slice(0, third);
    const a2 = array.slice(third, third * 2);
    const a3 = array.slice(third * 2);
    return {
      [target + '1']: a1,
      [target + '2']: a2,
      [target + '3']: a3
    };
}
