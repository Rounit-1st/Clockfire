# Distributed Job Scheduler

## Functional Requirement:

- User can create and schedule a job ( immediate/future/cron )
- Monitor the staus of a Job (real time)
- Support update/cancel scheduled jobs

## Non Functional Requirement:

- Scale: Support upto 10,000 jobs simultaneously (Availablity > Consistancy)
- Latency: Does a job within 2 seconds of their scheduled time
- Job should run at least ones

## Core Entities:

- Job
- Scheduler
- Executor

## API Design

- POST /jobs - create a job
- GET /jobs/:job_id - Get all job_id  job details
- GET /jobs/job_id/status - Get current status of job
- POST /job/job_id/cancel - Cancel a schedulin/runing job
- PUT /jobs/job_id - Udate date changes in a job
- POST jobs/job_id/runNow - Runs a job immedeitaly

## High Level Design
![image.png](docs/hld.png)

## Low Level Design
![image.png](docs/lld.png)


## DB structure

- Postgres Job
    - id (index)
    - name
    - Schdedule_type
    - status (paused/scheduled/cancel)
    - cron_expression (it is a standard expression to tell time)
    - payload
    - retires (3)
    - metadata
    
- Job_runs
    - id
    - job_id
    - status (queued/ running /success/ failed)
    - start_time
    - end_time
    - modified_time
    - executor_id
    - attempt_number
    - error_msg

## Handleable cases:

- Immediate running case
- Immediately scheduled running case
- Executor server failure case
- Watcher server failure case
- Can handel cancel request in next 20s

## Non Handled cases:

- Can’t handle immediate request if Kafka queue is long ( Kafka’s limitation)

For handeling that case we require reddis cache instead of kafka and a different architecture