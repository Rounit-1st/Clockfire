// import { client } from "./init.js";


const current_time = new Date()
console.log(current_time)

const READ_QUERY =
`
SELECT *
FROM events
WHERE run_at >= NOW()
AND run_at < NOW() + INTERVAL '3 minutes';
`

export async function readDB(){
    res = client.query(READ_QUERY)
}