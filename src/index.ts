import app from "app";
import http from "http";
import { logger } from "utils";

const server: http.Server = http.createServer(app);

server.listen(3000, () => logger.info("Server is running on port 3000"));
