import { Module, Global } from '@nestjs/common';
import { CollectionsPermissionModule } from './collections-permission/collections-permission.module';
import { TencentMapModule } from './tencent-map/tencent-map.module';
import { MinioClientModule } from './minio-client/minio-client.module';

@Global()
@Module({
  imports: [TencentMapModule, CollectionsPermissionModule, MinioClientModule],
})
export class CommonModule {}
