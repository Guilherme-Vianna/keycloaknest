import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  KeycloakConnectModule,
  ResourceGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080',
      realm: 'teste',
      clientId: 'nestjs',
      secret: 'M6g14LEIi2LaMOFVe9PUI7yroSFVQtM3',
    }),
  ],
  controllers: [AppController, UserController],
  providers: [
    UserService,
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
  ],
})
export class AppModule {}
