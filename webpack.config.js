const path = require('path');

const contentPath = path.resolve(__dirname, '../wp-content');
const pluginPath = path.resolve(contentPath, 'plugins');

module.exports = (env, argv) => {
  return {
    mode: 'production',
    entry: path.resolve(__dirname, 'blocks/index.js'),
    output: {
      path: path.resolve(__dirname, 'blocks-plugin'),
      filename: argv.mode === 'development' ? 'blocks.js' : 'blocks.min.js'
    },
    externals: {
      wp: 'wp',
      '@wordpress': 'wp',
      '@wordpress/blocks': 'wp.blocks',
      '@wordpress/block-editor': 'wp.blockEditor',
      '@wordpress/components': 'wp.components',
      '@wordpress/compose': 'wp.compose',
      '@wordpress/data': 'wp.data',
      '@wordpress/element': 'wp.element',
      '@wordpress/hooks': 'wp.hooks',
      '@wordpress/i18n': 'wp.i18n',
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, 'blocks')],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: argv.mode === 'development',
                    targets: '> 1%, not dead, not IE 11',
                    useBuiltIns: 'usage',
                    corejs: 3
                  }
                ],
                [
                  '@babel/preset-react',
                  {
                    pragma: 'wp.element.createElement'
                  }
                ]
              ],
              plugins: []
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    }
  };
};
