import {createServer} from "node:http"
import { homeHandler } from "./handlers/HomeHandler.js";
import { PurchaseHandler } from "./handlers/PurchaseHandler.js";
const PORT = process.env.PORT || 3000;

const server = createServer(PurchaseHandler)

 server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

export { server };
