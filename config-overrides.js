const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@darkgray': '#101010',
      '@gray': '#202020',
      '@primary-color': '#e1a21e',
      "@text-color": '#eee',
      '@menu-dark-bg': '@darkgray',
      '@layout-body-background': 'black',
      '@btn-default-bg': '@gray',
      '@input-bg': '@btn-default-bg'
    }
  })
);
