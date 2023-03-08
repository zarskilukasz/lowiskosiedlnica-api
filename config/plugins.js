module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'mailer@whitecat.ssd-linuxpl.com',
        defaultReplyTo: 'mailer@whitecat.ssd-linuxpl.com',
      },
    },
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
      },
      sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
    },
  },
});
