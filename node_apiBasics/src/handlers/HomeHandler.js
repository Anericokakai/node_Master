import { parse } from "node:url";
import { fileURLToPath } from "node:url";
import {dirname,join} from "node:path"
import { APPLICATION_TYPE } from "../utils/Headers.js";
import { routes } from "../routes/User.routes.js";

import { generateInstance } from "../factories/factories.js";
import { handleAppCrushError } from "../utils/ErrorHandler.js";

//  get the file pah using import

const currentFile = fileURLToPath(import.meta.url);
const __dirname= dirname(currentFile)
const filepath=join(__dirname,"../../database/users.json")
// sevice with all connection of instances

const userService = generateInstance({filepath});
const userRoutes = routes({ userService});

const allRoutes = {
  ...userRoutes,
  default: (req, res) => {
    res.writeHead(404, APPLICATION_TYPE);
    res.write("Oops You are Accessing a Wrong Route !!!");
    res.end();
  },
};
const homeHandler=(req,res)=>{
  const {url,method}=req
  const {pathname}=parse(url,true)
   const key =`${pathnameame}:${method.toLowerCase()}`;
  console.log({ key });
  //   check if our route exist else return the default
  const selectedRoute = allRoutes[key] || allRoutes.default;

  return Promise.resolve(selectedRoute(req, res)).catch(
    handleAppCrushError(res)
  );
}


export { homeHandler };
