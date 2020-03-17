module.exports = {
  name: 'fire-js-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/fire-js/data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
