//  data accesss layer

import { readFileSync, writeFile, writeFileSync } from "node:fs";

export default class UserRepository {
  constructor({ filepath }) {
    this.filepath = filepath;
  }

  async #currentContent() {
    try {
      const data = await readFileSync(this.filepath);

      return JSON.parse(data); //  return the data
    } catch (err) {
      throw err;
    }
  }
  findAllUsers() {
    return this.#currentContent();
  }
  async createUser(data) {
    //  get the file

    const currentFile = await this.#currentContent();

    currentFile.push(data);

    //  write the file again
    await writeFile(this.filepath, JSON.stringify(currentFile), (err) => {
      if (err) throw err;
      console.log({
        message: "user created successfully",
        userId: data.userId,
      });
      
    });
    return data.userId;
  }
}
// const __filename = fileURLToPath(import.meta.url);
// console.log({__filename})
// const __dirname = dirname(__filename);
// console.log({__dirname})
// const fPath = join(__dirname, "../database/users.json");
// const userRepository = new UserRepository({
//   filepath: fPath,
// });
// console.log(
//   await userRepository.createUser({
//     userId: "12345",
//     name: "Broski",
//     email: "broski@gmail",
//     password: "12345",
//   })

// );
// console.log(await userRepository.findAllUsers())
