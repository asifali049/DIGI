import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);

  const port = Number(config.get<number>('PORT', 4000));
  const apiPrefix = config.get<string>('API_PREFIX', 'api/v1');
  const frontendUrl = config.get<string>(
    'FRONTEND_URL',
    'http://localhost:3000',
  );
  const appName = config.get<string>('APP_NAME', 'DIGI Backend');

  app.setGlobalPrefix(apiPrefix);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.use(
    helmet({
      crossOriginResourcePolicy: {
        policy: 'cross-origin',
      },
    }),
  );

  app.use(compression());

  app.use(cookieParser(config.get<string>('COOKIE_SECRET')));

  app.enableCors({
    origin: [frontendUrl],
    credentials: true,
    methods: [
      'GET',
      'POST',
      'PUT',
      'PATCH',
      'DELETE',
      'OPTIONS',
    ],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'Origin',
      'X-Requested-With',
    ],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
      stopAtFirstError: false,
      validationError: {
        target: false,
        value: false,
      },
    }),
  );

  const swaggerEnabled =
    config.get<string>('SWAGGER_ENABLED') === 'true';

  if (swaggerEnabled) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('DIGI Agency API')
      .setDescription(
        'Production Grade REST API for DIGI Premium Digital Agency',
      )
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(
      app,
      swaggerConfig,
    );

    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }

  app.enableShutdownHooks();

  await app.listen(port);

  logger.log(`🚀 ${appName} started successfully`);
  logger.log(`🌍 http://localhost:${port}/${apiPrefix}`);
  logger.log(`📚 Swagger: http://localhost:${port}/docs`);
}

void bootstrap();