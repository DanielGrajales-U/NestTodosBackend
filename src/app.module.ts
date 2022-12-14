import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'luiggy21gra',
      database: 'todos',
      entities: [__dirname + './**/**/entity{.ts,js}'],
      autoLoadEntities: true,
      synchronize: true,
    })
    ,
    TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
