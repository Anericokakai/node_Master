import { readFileSync } from "node:fs";
export default class PurchasesRepository {
  constructor(path) {
    this.path = path;
  }
  async #fileAccess() {
    return JSON.parse(await readFileSync(this.path));
  }
  async getAllPurchases() {
    
  }
}
