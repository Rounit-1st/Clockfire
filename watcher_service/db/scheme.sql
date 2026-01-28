-- src/db/schema.sql

CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_type TEXT NOT NULL,
  name TEXT NOT NULL,
  payload JSONB,
  api TEXT NOT NULL,
--   status TEXT NOT NULL,
  run_at TIMESTAMP NOT NULL,
  retries INT DEFAULT 0,
  last_updated_at TIMESTAMP DEFAULT NOW()
);