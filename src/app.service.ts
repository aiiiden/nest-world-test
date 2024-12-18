import { Injectable } from '@nestjs/common';
import { Tokens, tokenToDecimals } from '@worldcoin/minikit-js';

@Injectable()
export class AppService {
  getHello(): string {
    // Using the tokenToDecimals function from the minikit-js package
    const decimal = tokenToDecimals(100000000, Tokens.USDCE);

    /**
     * Error: Cannot find module 'react'
     */

    return 'Hello World! ' + decimal;
  }
}
