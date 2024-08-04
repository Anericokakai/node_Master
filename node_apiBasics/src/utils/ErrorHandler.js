import { APPLICATION_TYPE } from "./Headers.js";

export const handleAppCrushError = (res) => {
  return (error) => {
    console.error({ error: error.stack, errorMessage: error.message });
    res.writeHead(500, APPLICATION_TYPE);
    res.write(
      JSON.stringify({ error: error.message, message: "Internal server error" })
    );
    res.end();
  };
};
