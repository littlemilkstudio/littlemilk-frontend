const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  /* The environment to use when building the project */
  env        : NODE_ENV,
  /* The full path of the projects root directory */
  basePath   : '__dirname',
  /* The name of the directory conatining the projects source code */
  srcDir     : 'src',
  /* The file name of the applications entry point */
  main       : 'main',
  /* The name of the directory on which to put compiled assets */
  outDir     : 'dist',
  /* The base path of all the projects assets (relative to the website root) */
  publicPath : '/',
  /* Whether to generate sourcemaps */
  sourcemaps : true,
  /* A hash map of the keys that the compiler should treat as external to the project */
  externals  : {},
  /* A hash map of variables and their values to expose globally */
  globals    : {},
  /* Whether to enable verbose logging */
  verbose    : false,
  /* The list of modules to bundle seperately from the core application code */
  vendors    : [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'react-router'
  ]
}
