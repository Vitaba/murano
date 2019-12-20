module.exports = {
  name: 'fire-js-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/fire-js/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
