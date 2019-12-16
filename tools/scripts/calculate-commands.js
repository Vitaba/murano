const execSync = require('child_process').execSync;

const isMaster = process.argv[2] === 'False';
const baseSha = isMaster ? 'origin/master~1' : 'master';
const head = process.argv[3];

// prints an object with keys {lint1: [...], lint2: [...], lint3: [...], test1: [...], .... build3: [...]}
console.log(
  JSON.stringify({
    ...commands('lint'),
    ...commands('test'),
    ...commands('build'),
    ...commands('e2e'),
    ...commands('deploy'),
  })
);

function commands(target) {
  const affected = execSync(
    `yarn nx print-affected --base=${baseSha} --head=${head} --target=${target}`
  ).toString();
  
    const array = JSON.parse(affected
    .trim()
    .replace(/\r?\n?[^\r\n]*$/, '')
      .substring(affected.indexOf("\n") + 1)
      .replace(`$ nx print-affected --base=${baseSha} --head=${head} --target=${target}`, "")
      .trim()).tasks.map(t => t.target.project);

    array.sort(() => 0.5 - Math.random());
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
