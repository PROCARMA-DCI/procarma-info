module.exports = {
  apps: [
    {
      name: "procarma-info-4001",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 4001 --hostname 127.0.0.1",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};