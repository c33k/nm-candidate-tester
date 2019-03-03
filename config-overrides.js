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
      '@primary-color': '#e1a21e',
      "@text-color": '#eee',
      '@menu-dark-bg': '#101010',
      '@layout-body-background': 'black',
      '@btn-default-bg': '#202020',
      '@input-bg': '@btn-default-bg'
    }
  })
);
