import { Injectable } from '@nestjs/common';
import { Tokens, tokenToDecimals } from '@worldcoin/minikit-js';

@Injectable()
export class AppService {
  getHello(): string {
    const decimal = tokenToDecimals(100000000, Tokens.USDCE);

    return 'Hello World! ' + decimal;
  }
}
