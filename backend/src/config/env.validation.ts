import { z } from 'zod';

const envSchema = z.object({
  // ---------------------------------------------------------------------------
  // Application
  // ---------------------------------------------------------------------------

  NODE_ENV: z.enum(['development', 'test', 'production']),

  PORT: z.coerce.number().int().positive(),

  APP_NAME: z.string().min(1),

  API_PREFIX: z.string().min(1),

  APP_URL: z.string().url(),

  FRONTEND_URL: z.string().url(),

  // ---------------------------------------------------------------------------
  // Database
  // ---------------------------------------------------------------------------

  DATABASE_URL: z.string().min(1),

  // ---------------------------------------------------------------------------
  // JWT
  // ---------------------------------------------------------------------------

  JWT_ACCESS_SECRET: z.string().min(32),

  JWT_ACCESS_EXPIRES_IN: z.string(),

  JWT_REFRESH_SECRET: z.string().min(32),

  JWT_REFRESH_EXPIRES_IN: z.string(),

  // ---------------------------------------------------------------------------
  // Security
  // ---------------------------------------------------------------------------

  BCRYPT_SALT_ROUNDS: z.coerce.number().min(10).max(15),

  COOKIE_SECRET: z.string().min(32),

  CORS_ORIGIN: z.string(),

  // ---------------------------------------------------------------------------
  // Redis
  // ---------------------------------------------------------------------------

  REDIS_HOST: z.string(),

  REDIS_PORT: z.coerce.number().positive(),

  REDIS_USERNAME: z.string().optional(),

  REDIS_PASSWORD: z.string().optional(),

  // ---------------------------------------------------------------------------
  // ImageKit
  // ---------------------------------------------------------------------------

  IMAGEKIT_PUBLIC_KEY: z.string().optional(),

  IMAGEKIT_PRIVATE_KEY: z.string().optional(),

  IMAGEKIT_URL_ENDPOINT: z.string().optional(),

  // ---------------------------------------------------------------------------
  // Resend
  // ---------------------------------------------------------------------------

  RESEND_API_KEY: z.string().optional(),

  EMAIL_FROM: z.string(),

  // ---------------------------------------------------------------------------
  // Stripe
  // ---------------------------------------------------------------------------

  STRIPE_SECRET_KEY: z.string().optional(),

  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  STRIPE_PUBLISHABLE_KEY: z.string().optional(),

  // ---------------------------------------------------------------------------
  // Razorpay
  // ---------------------------------------------------------------------------

  RAZORPAY_KEY_ID: z.string().optional(),

  RAZORPAY_KEY_SECRET: z.string().optional(),

  RAZORPAY_WEBHOOK_SECRET: z.string().optional(),

  // ---------------------------------------------------------------------------
  // Logging
  // ---------------------------------------------------------------------------

  LOG_LEVEL: z.enum([
    'fatal',
    'error',
    'warn',
    'info',
    'debug',
    'trace',
    'silent',
  ]),

  // ---------------------------------------------------------------------------
  // Rate Limit
  // ---------------------------------------------------------------------------

  THROTTLE_TTL: z.coerce.number().positive(),

  THROTTLE_LIMIT: z.coerce.number().positive(),

  // ---------------------------------------------------------------------------
  // Swagger
  // ---------------------------------------------------------------------------

  SWAGGER_ENABLED: z.enum(['true', 'false']),

  // ---------------------------------------------------------------------------
  // Health
  // ---------------------------------------------------------------------------

  HEALTH_CHECK_PATH: z.string(),

  // ---------------------------------------------------------------------------
  // Timezone
  // ---------------------------------------------------------------------------

  TZ: z.string(),
});

export type Environment = z.infer<typeof envSchema>;

export function validateEnvironment(config: Record<string, unknown>): Environment {
  const result = envSchema.safeParse(config);

  if (!result.success) {
    console.error('\n❌ Invalid environment configuration\n');

    for (const issue of result.error.issues) {
      console.error(`• ${issue.path.join('.')}: ${issue.message}`);
    }

    console.error('\nApplication startup aborted.\n');

    throw new Error('Environment validation failed.');
  }

  return result.data;
}