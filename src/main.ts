import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let url = '';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // protection
  await app.listen(process.env.PORT || 3000);
  url = await app.getUrl();
}
bootstrap();
