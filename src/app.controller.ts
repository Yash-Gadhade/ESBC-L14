import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('last-block')
  getLastBlock() {
    return this.appService.getBlock('latest');
  }

  @Get('block-by-hash/:hash')
  getBlockByHash(@Param('hash') hash: string) {
    return this.appService.getBlock(hash);
  }
}
