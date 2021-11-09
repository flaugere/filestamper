export interface StamperInterface {
  
  /**
   * @param address Address to check
   */
  get(address: string) : Promise<String>;

  /**
   * Save to filestamp as testament
   * @param stamp Stamp to save
   */
  set(stamp : String | null) : void;
}