import BlockchainException from "~/exception/BlockchainException";
export class Blockchain {
  public async getAccount(): Promise<string> {
    try {
      const accounts = await this.getConnector().request({ method: 'eth_requestAccounts' })
      return accounts[0];
    } catch (exception) {
      throw new BlockchainException(exception as String);
    }
  }

  private getConnector(): Ethereum {
    const { ethereum } = window;
    return ethereum;
  }
}

export default (_app : App, inject: Function) => {
  inject('blockchain', () => { return new Blockchain();})
}

declare module 'vue/types/vue' {
  interface Vue {
    $blockchain(): Blockchain
  }
}
