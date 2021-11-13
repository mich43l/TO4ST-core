/* istanbul ignore file */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

/**
 * Start application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get<number>("port");
  const ip = app.get(ConfigService).get<string>("ip")?.trim();

  app.enableShutdownHooks();

  if(!ip) 
  {  
    await app.listen(port);
    Logger.log(`Listening on port: ${port}`, "NestApplication");
  }
  else
  {
    await app.listen(port, ip);
    Logger.log(`Listening on port: ${port}, ip: ${ip}`, "NestApplication");
  }
}
bootstrap();
