const presets = [
  [
    "@babel/env",
    {
      targets: {
        firefox: "50"
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
