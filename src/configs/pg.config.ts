import {Pool} from 'pg'

// dev
// export const db = new Pool({
//     user: 'postgres',
//     host: '127.0.0.1',
//     database: 'accu_energo',
//     password: '***REMOVED***',
//     port: 5432,
// })

// prod
export const db = new Pool({
    user: 'admin',
    host: '127.0.0.1',
    database: 'accu-energo',
    password: '***REMOVED***',
    port: 5432,
})
