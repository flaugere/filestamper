export class BlockchainConfig {
  public getContractAddress() : string {
    return (process.env.CONTRACT_ADDRESS as string);
  }
}

export default (_app: App, inject: Function) => {
  inject('blockchainConfig', () => { return new BlockchainConfig();})
}
