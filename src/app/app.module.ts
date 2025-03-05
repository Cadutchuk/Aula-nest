import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: '635241',
      autoLoadEntities: true, // Carrega entidade sem precisar especifica-las
      synchronize: true, // Sincroniza com o BD. Não deve ser
    }),
    RecadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
