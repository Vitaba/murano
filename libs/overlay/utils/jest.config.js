module.exports = {
  name: 'overlay-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/overlay/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
