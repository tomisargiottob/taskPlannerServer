import pino from "pino"

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    formatters: {
        bindings () {
            return {}
        }
    },
    timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`
})

export default logger
