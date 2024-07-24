import { randomUUID } from "node:crypto";
export default class User {
  constructor({ name, emai, password }) {
    this.userId = randomUUID(),
    this.name = name
      this.email = emai,
      this.password = password
  }
}
