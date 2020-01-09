module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'useFormData',
      externals: {
        react: 'React'
      }
    }
  }
}
