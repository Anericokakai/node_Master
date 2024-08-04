import { handleAppCrushError } from "../utils/ErrorHandler.js";
import { APPLICATION_TYPE } from "../utils/Headers.js";
import { parse } from "node:url";
const purchaseRoutes = {
  default: (req, res) => {
    res.writeHead(404, APPLICATION_TYPE);
    res.write( JSON.stringify({
      error: "404 Page not found !!!",
      message: "You Are Trying to Access a route that does not exist",
    }))
    res.end()
  },
};

const PurchaseHandler = (req, res) => {
  const { url, method } = req;
  const { query, pathname } = parse(url, true);
  console.info({ pathname, method, url });
  const key = `${pathname}:${method.toLowerCase()}`;

  //  create a promise that is already resolved to allow asynchronous actions in our routes
  const chosenRoute = purchaseRoutes[key] || purchaseRoutes.default;

  Promise.resolve(chosenRoute(req, res)).catch(handleAppCrushError(res));
};
export { PurchaseHandler };
