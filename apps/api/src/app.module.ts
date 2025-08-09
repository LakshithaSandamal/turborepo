import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './auth';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule.forRoot(auth),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}