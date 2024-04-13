import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
console.log("(process.env.NODE_ENV",process.env.NODE_ENV);
if (process.env.NODE_ENV  === "production") {
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  }
  bootstrap();
}

export const viteNodeApp = NestFactory.create(AppModule);