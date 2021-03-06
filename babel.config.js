module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@components": "./src/components",
            "@data": "./src/data",
            "@helpers": "./src/helpers",
            "@navigators": "./src/navigators",
            "@screens": "./src/screens",
            "@styles": "./src/constants",
            "@store": './src/store',
          }
        },
      ],
    ],
  };
};
