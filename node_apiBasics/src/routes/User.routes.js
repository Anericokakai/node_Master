import { once } from "node:events";
import User from "../utils/User.js";
import { APPLICATION_TYPE } from "../utils/Headers.js";
const routes = ({ userService }) => ({
  //  register route
  "/user:get": (req, res) => {
    res.write("GET");
    res.end();
  },
  "/user:post": async (req, res) => {
    const data = await once(req, "data");
    const userData = JSON.parse(data);
    const user = new User(userData);
    const userId =  await userService.registerUser(user);
console.log(userId)
    res.writeHead(201, APPLICATION_TYPE);
    res.write(
      JSON.stringify({
        message: "User created successfully",
        userId,
      })
    );
    return res.end();
  },
});

export { routes };
