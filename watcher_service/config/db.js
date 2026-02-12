import dotenv from 'dotenv'
import { Pool } from 'pg';

dotenv.config();

console.log(process.env.DB_USER, typeof process.env.DB_PASSWORD);


export const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: parseInt(process.env.DB_POOL_MAX, 10) || 20,        // max connections
  idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT, 10) || 30000,
  connectionTimeoutMillis: parseInt(process.env.DB_CONN_TIMEOUT, 10) || 2000,
});

pool.on("connect", () => {
  console.log("✅ PostgreSQL pool connected");
});

pool.on("error", (err) => {
  console.error("❌ Unexpected PG error", err);
  process.exit(1);
});