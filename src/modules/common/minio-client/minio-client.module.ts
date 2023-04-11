import { Module } from '@nestjs/common';
import { MinioModule } from 'nestjs-minio-client';
import { MinioClientService } from './service/minio-client.service';
import { MinioClientController } from './controller/minio-client.controller';
import MINIO_CONFIG from '@src/config/minio.config';

@Module({
  imports: [
    MinioModule.register({
      endPoint: MINIO_CONFIG.MINIO_ENDPOINT,
      port: MINIO_CONFIG.MINIO_PORT,
      useSSL: true,
      accessKey: MINIO_CONFIG.MINIO_ACCESSKEY,
      secretKey: MINIO_CONFIG.MINIO_SECRETKEY,
    }),
  ],
  controllers: [MinioClientController],
  providers: [MinioClientService],
})
export class MinioClientModule {}
