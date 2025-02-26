import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database:'db.sqlite',
    entities:['dist/**/*.entity{.ts,.js}'],
    synchronize:true // NAO USA EM PROD, SÓ EM DEV
  }),

    
    
    
    
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
