import {createServer} from "node:http"
import { homeHandler } from "./handlers/HomeHandler.js";
const PORT = process.env.PORT || 3000;

const server = createServer(homeHandler)

 server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

export { server };
