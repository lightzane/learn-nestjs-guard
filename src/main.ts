import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  const logger = new Logger('MyNestApplication', { timestamp: true });

  const config = new DocumentBuilder()
    .setTitle('NestJS Guard')
    .setDescription('For testing API endpoints using NestJS Guards')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { customSiteTitle: 'learn-nestjs-guard' });

  await app.listen(port)
    .then(() => logger.debug(`Listening to http://localhost:${port}`));
}
bootstrap();
