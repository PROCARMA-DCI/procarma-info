module.exports = {
  apps: [
    {
      name: "procarma-info-4001",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 4001,
        SENDGRID_SMTP: process.env.SENDGRID_SMTP,
        SENDGRID_USER: process.env.SENDGRID_USER,
        SENDGRID_PASS: process.env.SENDGRID_PASS,
        DEFAULT_FROM_EMAIL: process.env.DEFAULT_FROM_EMAIL,
      },
    },
  ],
};
