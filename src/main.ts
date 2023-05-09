import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  process.env.TZ = 'UTC';

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET, HEAD, PUT, POST, DELETE, OPTIONS',
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.setGlobalPrefix('/api/v1');

  await app.listen(5005);
}
bootstrap();
