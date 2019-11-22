module.exports = {
  name: 'scss-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/scss/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
