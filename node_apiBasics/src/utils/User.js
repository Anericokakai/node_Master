import { randomUUID } from "node:crypto";
export default class User {
  constructor({ name, email, password }) {
    this.userId = randomUUID(),
    this.name = name
      this.email = email,
      this.password = password
  }
}
