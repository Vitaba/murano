module.exports = {
  // Tailwind Paths
  configJS: 'apps/murano-admin/tailwind.config.js',
  sourceCSS: 'apps/murano-admin/src/tailwind-build.scss',
  outputCSS: 'apps/murano-admin/src/tailwind.scss',
  // Sass
  sass: true,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
