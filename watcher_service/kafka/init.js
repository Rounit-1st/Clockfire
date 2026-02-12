import {Kafka} from 'kafkajs'
import dotenv from 'dotenv'

dotenv.config()

const kafka = new Kafka({
  clientId: 'Clock Fire Consumer',
  brokers: [`${process.env.kafka_docker_name}:${process.env.kafka_port}`],
})

// Bad practice as it producer.connect is a side effect
// export const producer = kafka.producer();
// await producer.connect();

let consumer;

export async function getConsumer() {
  if (!consumer) {
    consumer = kafka.consumer({groupId: process.env.kafka__consumer_id});
    await consumer.connect();
  }
  return consumer;
}