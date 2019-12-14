const execSync = require('child_process').execSync;

const commands ={"lint1":["common-ui-e2e","murano-admin-e2e"],"lint2":["murano-admin","scss-ui"],"lint3":["common-utils","common-ui"],"test1":["common-ui"],"test2":["scss-ui"],"test3":["common-utils","murano-admin"],"build1":["common-ui"],"build2":["common-utils"],"build3":["scss-ui"]};
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