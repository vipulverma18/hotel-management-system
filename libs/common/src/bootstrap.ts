import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

declare const module: {
  hot?: {
    accept: () => void;
    dispose: (callback: () => void) => void;
  };
};

export async function bootstrap(
  AppModule: any,
  serviceName: string,
  port: number,
) {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const config = new DocumentBuilder()
    .setTitle('Hotel Management System')
    .setDescription(`${serviceName} API description`)
    .setVersion('1.0')
    .addTag(`${serviceName}`)
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory());

  //app.useLogger(app.get(LoggerService));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.PORT ?? port);

  if (module.hot) {
    module.hot.accept();
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    module.hot.dispose(() => app.close());
  }
}
