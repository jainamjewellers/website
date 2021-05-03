/* db config */
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jainamdb',
    password: 'Postw@11paper$',
    port: 5432,
})
/* db config */

//##################################CRUDBLOCK#################################################

//Get all users api
const getUsers = (request) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        return(results.rows)
    })
}
//Get all users api


//GET a single user by ID
const getUserById = (request) => {
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        return json(results.rows)
    })
}
//GET a single user by ID


//POST a new user
const createUser = (request) => {
    const { id, firstname, lastname, email, password } = request
    pool.query('INSERT INTO users (id,firstname,lastname,email,password) VALUES ($1,$2,$3,$4,$5)', [id, firstname, lastname, email, password], (error, results) => {
        if (error) {
            throw error
        }
        return (`User added with ID: ${results.insertId}`)
    })
}
//POST a new user


//PUT updated data in an existing user
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}
//PUT updated data in an existing user


//DELETE a user
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}
//DELETE a user


//##################################CRUDBLOCK#################################################


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}