module.exports = {
  name: 'murano-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/murano-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
