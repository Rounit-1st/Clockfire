import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'hyEBb9cv3hnxvgZx1ObLhVvX2oSOqMZm',
    socket: {
        host: 'redis-18192.c8.us-east-1-3.ec2.cloud.redislabs.com',
        port: 18192
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();


await client.set('User:4',"Roller");
await client.set('User:5',"Truck");
await client.set('User:6',"bull");
const result = await client.get('foo');
console.log(result)  // >>> bar

