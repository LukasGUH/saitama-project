import dotenv from 'dotenv';
dotenv.config();

import log from 'pino';
import { format } from 'date-fns';

const logger = log({
  level: process.env.LOG_LEVEL,
  timestamp: () => `,"time":${format(new Date(), 'dd/mm/yyyy')}`,
  transport: {
    target: 'pino-pretty',
    options: { colorize: true },
  },
});

export default logger;
