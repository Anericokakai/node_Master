import { parse } from "node:url";
import { APPLICATION_TYPE } from "../utils/Headers.js";

const allRoutes = {
  // 404 Route default
  "/user:get": async (req, res) => {
    throw new Error("");
    res.write("GET");
    res.end();
  },
  default: (req, res) => {
    res.writeHead(404, APPLICATION_TYPE);
    res.write("Oops You are Accessing a Wrong Route !!!");
    res.end();
  },
};
function homeHandler(req, res) {
  const { url, method } = req;

  const { pathname } = parse(url, true);
  console.log({ url, method, pathname });
  const key = `${pathname}:${method.toLowerCase()}`;
  console.log({ key });
  //   check if our route exist else return the default
  const selectedRoute = allRoutes[key] || allRoutes.default;

  return Promise.resolve(selectedRoute(req, res)).catch(
    globalErrorHandler(res)
  );
}

const globalErrorHandler = (res) => {
  return (error) => {
    res.writeHead(500, APPLICATION_TYPE);
    res.write(
      JSON.stringify({
        error: "Internal Server Error",
        errorMessage: error.message,
      })
    );
    return res.end();
  };
};
export { homeHandler };
