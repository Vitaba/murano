const execSync = require('child_process').execSync;

const commands = JSON.parse(process.argv[2]);
const projects = commands[process.argv[3]];
const target = process.argv[4];
const parallel = target !== 'e2e' ? '--parallel':'';

console.log("Commands", process.argv[2]);
console.log("Job", process.argv[3]);
console.log("Projects", commands[process.argv[3]]);
console.log("Target", process.argv[4]);

// Validate not empty execute nothing when projects are empty
if(projects.length > 0){
  execSync(
    `yarn nx run-many --target=${target} --projects=${projects.join(
      ','
    )} ${parallel}`,
    {
      stdio: [0, 1, 2]
    }
  );
}
