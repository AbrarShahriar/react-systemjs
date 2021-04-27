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
    'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'https://unpkg.com/systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'https://unpkg.com/react@17.0.1/umd/react.development.js',
    'react-dom': 'https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js',
    'css': 'https://unpkg.com/systemjs-plugin-css@0.1.37/css.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('../src/index.js')
  .catch(console.error.bind(console));
