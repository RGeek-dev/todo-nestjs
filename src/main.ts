import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // Enable global validation pipe with whitelist option
  app.useGlobalFilters(new HttpExceptionFilter()); // Enable global exception filter
  app.useGlobalInterceptors(new TransformInterceptor()); // Enable global transform interceptor
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
