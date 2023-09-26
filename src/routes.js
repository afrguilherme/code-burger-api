import { Router } from "express"
import { v4 } from "uuid"
import User from "./app/models/Users"

const routes = new Router()

routes.get("/", async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: "Guilherme",
    email: "augustogafr@gmail.com",
    password_hash: "123@",
  })
  return response.json(user)
})

export default routes
