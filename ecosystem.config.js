module.exports = {
  apps: [
    {
      name: "procarma-info-4001",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 4001,
      },
    },
  ],
};
