import { Logger } from "pino";
import { Sequelize } from "sequelize"


const connection = new Sequelize(process.env.DB_NAME!, process.env.DB_USERNAME!, process.env.DB_PASSWORD,{
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  dialect: 'postgres',
  logging: false,
})

export async function connect(logger: Logger) {
  await connection.authenticate();
  logger.info({module: 'Database', method: 'connect'},'Successfully connected to database')
}

export default connection