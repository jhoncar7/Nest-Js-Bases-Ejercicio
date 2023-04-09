import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // limpia la data enviada y solo entra los parametros permitidos
      forbidNonWhitelisted: true, // no deja pasar parametros no permitidos
    }),
  )

  await app.listen(5000);
}
main();
