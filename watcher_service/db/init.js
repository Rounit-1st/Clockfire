import fs from 'fs'
import { fileURLToPath } from "url";
import path from "path";
import { pool } from "../config/db.js";

export async function initDb() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const schemaPath = path.join(__dirname, "schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");

  const client = await pool.connect();

  try {
    console.log("🔧 Initializing DB schema...");
    await client.query("BEGIN");
    await client.query(schema);
    await client.query("COMMIT");
    console.log("✅ DB schema ready");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("❌ DB init failed", err);
    process.exit(1);
  } finally {
    client.release();
  }
}

export const client = await pool.connect();