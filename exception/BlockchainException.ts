export default class BlockchainError extends Error {
  constructor(message: String) {
    super();
    this.stack = `Blockchain exception : ${message}`;
    console.error(this.stack);
  }
}