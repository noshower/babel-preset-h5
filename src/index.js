const runtime = (function () {
  try {
    require.resolve("react/jsx-runtime");
    return "automatic";
  } catch (e) {
    return "classic";
  }
})();

const onlyRemoveTypeImportsAble = (useTypeScript) => {
  if (useTypeScript) {
    const version = require("typescript").version;
    return Number(version.match(/(\d+.\d+)/)[0]) >= 3.8;
  }
  return false;
};

const isEmptyObject = (obj) => {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0;
};

module.exports = (api, opts) => {
  const { targets, useTypeScript = true, useReact = true } = opts;
  return {
    presets: [
      [
        require("@babel/preset-env"),
        {
          targets: isEmptyObject(targets)
            ? {
                browsers: ["last 2 versions", "> 1%", "ie >= 11"],
              }
            : targets,
          useBuiltIns: "usage",
          corejs: {
            version: require("core-js/package.json").version,
            proposals: true,
          },
          exclude: ["transform-typeof-symbol"],
          modules: false,
          bugfixes: true,
        },
      ],
      useReact && [
        require("@babel/preset-react"),
        {
          runtime: runtime,
          development: api.env("development"),
          ...(runtime === "classic" ? { useBuiltIns: true } : {}),
        },
      ],
      useTypeScript && [
        require("@babel/preset-typescript"),
        {
          allowDeclareFields: true,
          onlyRemoveTypeImports: onlyRemoveTypeImportsAble(useTypeScript),
        },
      ],
    ].filter(Boolean),
    plugins: [
      [require("@babel/plugin-proposal-class-properties"), { loose: true }],
      [
        require("@babel/plugin-transform-runtime"),
        {
          corejs: { version: 3, proposals: true },
          version: require("@babel/runtime/package.json").version,
          useESModules: true,
          helpers: true,
          regenerator: true,
        },
      ],
    ],
  };
};
