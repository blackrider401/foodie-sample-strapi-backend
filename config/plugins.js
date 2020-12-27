module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env(
        "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"
      ),
    },
    settings: {
      defaultFrom: "chijioke@burgeon8interactive.com",
      defaultReplyTo: "chijioke@burgeon8interactive.com",
    },
  },
});
