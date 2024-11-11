module.exports = {
  root: true,
  extends: ["riophae/vue"],
  plugins: ["react"],
  globals: {
    PKG_VERSION: true,
  },
  settings: {
    "import/resolver": {
      node: null,
      webpack: {
        config: "build/webpack-configs/base.js",
      },
    },
  },
  rules: {
    "import/no-named-as-default": 0,
    "unicorn/consistent-function-scoping": 0,
    "vue/attributes-order": 0,
    "vue/no-v-html": 0,
    "no-confusing-arrow": 0,
    "no-console": "off",
    "no-warning-comments": 0,
    "no-undefined": 0,
    "prefer-destructuring": 0,
  },
  overrides: [
    {
      files: ["src/**"],
      rules: {
        "unicorn/no-for-loop": 0,
        "unicorn/prefer-includes": 0,
        "unicorn/prefer-node-append": 0,
        "vue/script-indent": "off",
        "array-bracket-spacing": "off",
        semi: 0, // 关闭多余分号的检查
        indent: 0, // 关闭缩进检查
        quotes: 0, // 关闭引号检查
      },
    },
  ],
};
