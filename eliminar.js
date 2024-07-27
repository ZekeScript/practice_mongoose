import { initMongoDB } from './conexion.js'
import { UserModel } from './schema.js'

const eliminar = async () => {
  await initMongoDB()

  console.log(await UserModel.findByIdAndDelete('66a2f9ccffb575d48f91aa86'))
}

eliminar()
