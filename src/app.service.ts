import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  handleZscoreWebhook(body) {
    console.log(body);
    this.logger.log({ body });
  }
}
