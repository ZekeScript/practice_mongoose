import { initMongoDB } from './conexion.js'
import { UserModel } from './schema.js'

const consultas = async () => {
  await initMongoDB()

  console.log(await UserModel.find())
}

consultas()
