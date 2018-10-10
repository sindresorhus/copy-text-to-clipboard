const presets = [
  [
    "@babel/env",
    {
      targets: {
        firefox: "44"
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
