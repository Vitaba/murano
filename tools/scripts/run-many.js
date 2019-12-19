const execSync = require('child_process').execSync;

console.log("Commands", process.argv[2]);
const commands = process.argv[2];
const projects = commands[process.argv[3]];
const target = process.argv[4];

// Validate not empty execute nothing when projects are empty
if(projects.length > 0){
  execSync(
    `yarn nx run-many --target=${target} --projects=${projects.join(
      ','
    )} --parallel`,
    {
      stdio: [0, 1, 2]
    }
  );
}
