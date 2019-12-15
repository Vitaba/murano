const execSync = require('child_process').execSync;

const commands = {"lint1":["murano-admin","murano-admin-e2e"],"lint2":["scss-ui","common-ui-e2e"],"lint3":["common-utils","common-ui"],"test1":["murano-admin"],"test2":["common-ui"],"test3":["scss-ui","common-utils"],"build1":["murano-admin"],"build2":["common-ui"],"build3":["common-utils",
"scss-ui"],"e2e1":[],"e2e2":[],"e2e3":["common-ui-e2e","murano-admin-e2e"]};
const projects = commands[process.argv[2]];
const target = process.argv[3];
execSync(
  `yarn nx run-many --target=${target} --projects=${projects.join(
    ','
  )} --parallel`,
  {
    stdio: [0, 1, 2]
  }
);