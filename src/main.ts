import { NestFactory } from '@nestjs/core';
import { TodosModule } from './todos.module';

async function bootstrap() {
  const app = await NestFactory.create(TodosModule);
  app.enableCors(); // protection
  await app.listen(process.env.PORT);
}
bootstrap();
