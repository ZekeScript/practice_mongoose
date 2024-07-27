import { initMongoDB } from './conexion.js'
import { UserModel } from './schema.js'

const createUser = async (user) => {
  await UserModel.create(user)
}

const test = async () => {
  // conexion a la BD
  await initMongoDB()

  const newUser = {
    firstname: 'Juan',
    lastname: 'Gomez',
    email: 'jgomes@mail.com',
    username: 'jgomez',
    password: '1234',
    age: 35
  }

  await createUser(newUser)
  console.log('Usuario creado')
}

test()
