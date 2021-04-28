SystemJS.config({
  baseURL:'',
  defaultExtension: true,
  packages: {
    ".": {
      main: './app.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    }
  },
  map: {
    'plugin-babel': '../node_modules/babel/plugin-babel.js',
    'systemjs-babel-build': '../node_modules/systemjs/systemjs-babel-browser.js',
    'react': '../node_modules/react/react.production.min.js',
    'react-dom': '../node_modules/react-dom/react-dom.production.min.js',
    'css': 'https://unpkg.com/systemjs-plugin-css@0.1.37/css.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('../src/index.js')
  .catch(console.error.bind(console));
