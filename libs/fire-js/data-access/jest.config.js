module.exports = {
  name: 'worker-fire-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/worker-fire/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
