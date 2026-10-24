import {Pool} from 'pg'

// Connection settings come from the standard PGHOST / PGPORT / PGUSER /
// PGPASSWORD / PGDATABASE variables: the credentials used to be committed here.
export const db = new Pool()
