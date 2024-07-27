import { initMongoDB } from './conexion.js'
import { UserModel } from './schema.js'

const actualizar = async () => {
  await initMongoDB()

  console.log(await UserModel.findByIdAndUpdate('66a2f9ccffb575d48f91aa86', { password: '123' }, { new: true }))
}

actualizar()
