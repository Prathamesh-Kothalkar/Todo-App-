const zod = require('zod');

const createTodo=zod.object({
    title:zod.string(),
    desc:zod.string()
})

const updateTodo=zod.object({
    id:zod.string()
})

const createUser=zod.object({
    username:zod.string().min(3),
    password:zod.string().min(6)
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo,
    createUser:createUser
}