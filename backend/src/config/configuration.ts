const configuration = () => ({
  app: {
    name: process.env.APP_NAME ?? 'DIGI Backend',
    env: process.env.NODE_ENV ?? 'development',
    url: process.env.APP_URL ?? 'http://localhost:4000',
    port: Number(process.env.PORT ?? 4000),
    apiPrefix: process.env.API_PREFIX ?? 'api/v1',
    frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
  },

  database: {
    url: process.env.DATABASE_URL ?? '',
  },

  auth: {
    accessToken: {
      secret: process.env.JWT_ACCESS_SECRET ?? '',
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
    },

    refreshToken: {
      secret: process.env.JWT_REFRESH_SECRET ?? '',
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '30d',
    },

    bcrypt: {
      saltRounds: Number(process.env.BCRYPT_SALT_ROUNDS ?? 12),
    },

    cookie: {
      secret: process.env.COOKIE_SECRET ?? '',
    },
  },

  cors: {
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
  },

  redis: {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: Number(process.env.REDIS_PORT ?? 6379),
    username: process.env.REDIS_USERNAME || undefined,
    password: process.env.REDIS_PASSWORD || undefined,
  },

  imagekit: {
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY ?? '',
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY ?? '',
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT ?? '',
  },

  resend: {
    apiKey: process.env.RESEND_API_KEY ?? '',
    from: process.env.EMAIL_FROM ?? '',
  },

  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY ?? '',
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY ?? '',
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? '',
  },

  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID ?? '',
    keySecret: process.env.RAZORPAY_KEY_SECRET ?? '',
    webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET ?? '',
  },

  logger: {
    level: process.env.LOG_LEVEL ?? 'info',
  },

  throttle: {
    ttl: Number(process.env.THROTTLE_TTL ?? 60),
    limit: Number(process.env.THROTTLE_LIMIT ?? 100),
  },

  swagger: {
    enabled: process.env.SWAGGER_ENABLED === 'true',
  },

  health: {
    path: process.env.HEALTH_CHECK_PATH ?? '/health',
  },

  timezone: process.env.TZ ?? 'Asia/Kolkata',
});

export default configuration;