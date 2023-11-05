import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
       //...
      //  JWT_SECRET: Joi.string().required(),
      //  JWT_EXPIRATION_TIME: Joi.string().required(),
       // Refresh token part
      //  JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
      //  JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
      //  JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
      //  JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
       //google Oauth
      //  GOOGLE_ID: Joi.string().required(),
      //  GOOGLE_SECRET: Joi.string().required(),
       //Email Service
      //  EMAIL_SERVICE: Joi.string().required(),
      //  EMAIL_USER: Joi.string().required(),
      //  EMAIL_PASSWORD: Joi.string().required(),
      //  EMAIL_CONFIRMATION_URL: Joi.string().required(),
      //  JWT_VERIFICATION_TOKEN_SECRET:Joi.string().required(),
      //  JWT_VERIFICATION_TOKEN_EXPIRATION_TIME:Joi.string().required(),
     })
     }),

    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'mongodb://127.0.0.1/payscrapper',
      synchronize:true,
      //useUnifiedTopology:true,
      autoLoadEntities:true
    }),

    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get('DB_HOST'),
    //     port: +configService.get<number>('DB_PORT'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     database: configService.get('DB_NAME'),
    //     autoLoadEntities: true,
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),

    //sqlite db

    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'sqlite',
    //     database: configService.get('DB'),
    //     autoLoadEntities: true,
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      // this allows for code first application
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: true
    }),
    LessonModule,
   UsersModule,
    PrismaModule,
   AuthModule,
   BookModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
