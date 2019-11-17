module.exports = {
  name: 'common-utils',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/utils',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
