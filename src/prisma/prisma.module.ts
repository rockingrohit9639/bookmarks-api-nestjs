import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // this will make the module to be used in any other modules
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
