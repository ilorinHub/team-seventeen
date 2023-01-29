import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function generateOpenApiConfig(app: INestApplication) {
  const openApiConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Carefara API Services')
    .setDescription(
      'This is the API Documentation that describes the REST endpoints for the Carefara Application',
    )
    .setVersion('1.0')
    .setContact(
      'AbdulRazaq Suleiman',
      'https://github.com/abdul-razaq',
      'razaqayomide01@gmail.com',
    )
    .setLicense('Carefara', 'https://carefara.com')
    .setTermsOfService('https://carefara.com')
    .build();

  const document = SwaggerModule.createDocument(app, openApiConfig);
  SwaggerModule.setup('/api/v1/doc', app, document);
}
