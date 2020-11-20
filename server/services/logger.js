import winston from "winston";

import { logger_config } from '../config/index'

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(logger_config.file),
    new winston.transports.Console(logger_config.console),
  ],
  exitOnError: false,
  handleExceptions: true,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
    winston.format.splat(),
  ),
});

logger.stream = {
  write: function (message) {
    logger.info(message);
  },
};

export default logger