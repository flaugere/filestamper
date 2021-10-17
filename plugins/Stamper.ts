import { ethers, Contract } from 'ethers'
import { StamperInterface } from '~/plugins/StamperInterface';
import { BlockchainConfig } from "~/plugins/BlockchainConfig";

const contract = require('~/blockchain/ethereum/build/contracts/Stamper.json');
class Stamper implements StamperInterface {
  private config : BlockchainConfig;
  public constructor() {
    this.config = new BlockchainConfig();
  }

  /**
   * @param address Ethereum address to check
   */
  public async get(address: string) {
    const stamper = this.getStamper();
    return await stamper.get(address);
  }

  /**
   * Save to filestamp as testament
   * @param stamp Stamp to save
   */
  public async set(stamp : String | null) {
    await this.getStamper().set(stamp);
  }

  /**
   * Get stamper ethereum contract
   */
  private getStamper(): Contract
  {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractStamper : Contract = new ethers.Contract(this.config.getContractAddress(), contract.abi, provider);
    return contractStamper.connect(signer);
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $stamper(): Stamper
  }
}

export default (_app : App, inject: Function) => {
  inject('stamper', () => { return new Stamper();})
}
