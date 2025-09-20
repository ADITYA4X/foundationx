import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { add } from '@foundation/sample-lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('add', add(2222, 3333));
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
