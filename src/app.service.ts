import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import tokenJson from './assets/MyToken.json';

@Injectable()
export class AppService {
  provider: ethers.providers.Provider;

  constructor() {
    this.provider = ethers.getDefaultProvider('goerli');
  }

  getBlock(blockHashorBlockTag: string): Promise<ethers.providers.Block> {
    return this.provider.getBlock(blockHashorBlockTag);
  }

  getTotalSupply(address: string) {
    const contract = new ethers.Contract(address, tokenJson.abi, this.provider);
  }
}
