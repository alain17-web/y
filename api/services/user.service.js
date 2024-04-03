const sql = require('mssql');
const sqlConfig = require('../database');
const bcrypt = require('bcrypt');

const userService = {
    register: async (data) => {
        try {

            const {lastName, firstName, hashedPwd, username} = data;
            await sql.connect(sqlConfig)

            const request = new sql.Request()

            const userExists = await request
                .input('username', sql.NVarChar, username)
                .query('SELECT * FROM users WHERE username = @username')

            if (userExists.recordset.length > 0) {
                throw new Error('A user with this username already exists');
            } else {
                const insertNewUser = await request
                    .input('lastName', sql.NVarChar, lastName)
                    .input('firstName', sql.NVarChar, firstName)
                    .input('hashedPwd', sql.NVarChar, hashedPwd)
                    .query('INSERT INTO users (lastName,firstName,username,pwd) VALUES (@lastName,@firstName,@username,@hashedPwd)')

                return insertNewUser
            }
        } catch (err) {
            console.error(err)
            throw err;
        }

    },

    login: async (username, pwd) => {
        try {
            await sql.connect(sqlConfig)
            const request = new sql.Request()

            const result = await request
                .input('username', sql.NVarChar, username)
                .query('SELECT * FROM users WHERE username = @username');

            if (result.recordset.length > 0) {
                const user = result.recordset[0]
                const matchPassword = bcrypt.compareSync(pwd, user.pwd)

                if (matchPassword) {
                    return user
                }
            } else {
                return null
            }

        } catch (err) {
            console.error(err)
            throw err;
        }
    },

    logout: async () => {
        try{
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('userId', sql.Int, userId)
                .query('UPDATE users SET jwt = NULL WHERE userId = @userId');

            return result.rowsAffected[0] > 0;
        } catch (err) {
            console.error(err)
            throw err;
        }
    },

    updateJwt: async (userId, jwt) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request()

            const result = await request
                .input('userId', sql.Int, userId)
                .input('jwt', sql.NVarChar, jwt)
                .query('UPDATE users SET JWT = @jwt WHERE userId = @userId')

            return result.rowsAffected[0] > 0
        } catch (err) {
            console.error(err)
            throw err;
        }
    },

    getPrivateProfile: async (userId) => {
        try{

            await sql.connect(sqlConfig)

            const request = new sql.Request()


            const result = await request
                .input('userId', sql.Int, userId)
                .query('SELECT lastName,firstName,username,pwd FROM users WHERE userId = @userId')

            return result.recordset[0];
        } catch (err){
            console.error(err)
            throw err;
        }
    },

    updateProfile: async (userId, newData) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const { lastName, firstName, username, password } = newData;

            let query = 'UPDATE users SET';
            const inputParams = { userId };

            if (lastName) {
                query += ' lastName = @lastName,';
                inputParams.lastName = lastName;
            }

            if (firstName) {
                query += ' firstName = @firstName,';
                inputParams.firstName = firstName;
            }

            if (username) {
                query += ' username = @username,';
                inputParams.username = username;
            }

            if (password) {
                const hashedPwd = bcrypt.hashSync(password, 10);
                query += ' pwd = @hashedPwd,';
                inputParams.hashedPwd = hashedPwd;
            }


            query = query.slice(0, -1);

            query += ' WHERE userId = @userId';

            const result = await request
                .input('userId', sql.Int, userId)
                .input('lastName', sql.NVarChar, inputParams.lastName || null)
                .input('firstName', sql.NVarChar, inputParams.firstName || null)
                .input('username', sql.NVarChar, inputParams.username || null)
                .input('hashedPwd', sql.NVarChar, inputParams.hashedPwd || null)
                .query(query);

            return result.rowsAffected[0] > 0;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },


    deleteUser: async (userId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('userId',sql.Int,userId)
                .query('DELETE FROM users WHERE userId = @userId')

            return result.rowsAffected[0] > 0

        } catch (err){
            console.error(err, 'bug au service')
            throw err;
        }
    },

    getUserById: async (userId) => {
        try {
            await sql.connect(sqlConfig);
            const request = new sql.Request();

            const result = await request
                .input('userId', sql.Int, userId)
                .query('SELECT * FROM users WHERE userId = @userId');

            if (result.recordset.length > 0) {
                return result.recordset[0];
            } else {
                return null;
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

}

module.exports = userService