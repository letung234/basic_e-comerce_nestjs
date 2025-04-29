import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });

  const config = new DocumentBuilder()
    .setTitle('E-Commerce App')
    .setDescription('E-Commerce APIs description')
    .setVersion('1.0')
    .addTag('APIs')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description:
          'Copy JWT token to test: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1YW5nbGUyMjIyMzNAZ21haWwuY29tIiwiaWQiOiI2ODEwNWI0ZDA5MzFjNzhkNDk0N2E0ZTgiLCJpYXQiOjE3NDU5MTUxNzAsImV4cCI6MTc0NjE3NDM3MH0.klMm0c17de7a25OF7Jwgkm8CW4RFG_7MdXCoNoyW3lSzxXuuBlvWLgNv2sVbafFe78NBNRLmyw3i8ySZI1NJOA',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  const port = process.env.PORT || 5000;
  await app.listen(port, () => {
    console.log(`Server listening to port: ${port}`);
  });
}
bootstrap();
