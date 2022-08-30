module.exports = {
  plugins: ['@babel/proposal-class-properties'],
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    'es2015',
    'stage-0',
    'react',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
