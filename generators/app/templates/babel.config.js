module.exports = function(api) {
  api.cache(true);

  const presets = [
    '@babel/typescript',
    '@babel/react',
    [
      '@babel/env',
      {
        modules: false,
        targets: ['last 2 Chrome versions', 'last 2 iOS major versions'],
      },
    ],
  ];

  const plugins = [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-async-to-generator',
  ];

  return {
    presets,
    plugins,
  };
};
