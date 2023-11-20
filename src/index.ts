import express, { Request, Response } from "express"
import logger from './utils/Logger'
import 'dotenv/config'
import dbInit from './database/init'

dbInit()

async function startServer() {
  const app = express()
  
  app.use(express.json())
  
  app.get('/health', (req: Request, res: Response) => {
      logger.info('App up and running healthy')
      res.status(200).send('Healthy')
  })
  
  logger.info(`Server up and running on port ${process.env.PORT}`)
  
  app.listen(process.env.PORT)
}

startServer()

