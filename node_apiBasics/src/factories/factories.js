//  Factory layer allows all the comminication between service and repositories

import UserService from "../service/UserService.js";
import UserRepository from "../repositories/UserRepository.js";
const generateInstance = ({ filepath }) => {
  //  connections b
  console.log({ filepath });
  const userRepository = new UserRepository({ filepath });

  const userService = new UserService({ userRepository });
  return userService;
};

export { generateInstance };
