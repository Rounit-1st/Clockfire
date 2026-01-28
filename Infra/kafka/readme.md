# How to run Docker

```bash
docker compose up
```

## Open Terminal in Kafka

In another terminal

```bash
docker exec -it <name of container kafka> bash
```

### Consumer for testing

Inside bash terminal of kafka

```bash
kafka-console-consumer --topic test-topic --bootstrap-server localhost:9092
```

