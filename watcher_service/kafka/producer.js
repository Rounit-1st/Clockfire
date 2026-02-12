import { getProducer} from './init.js'
import dotenv from 'dotenv'

dotenv.config()

export async function recieveFromKafka(msg,id){
    const producer = await getProducer();
    try{
        const response = await producer.send({
            topic: process.env.kafka_topic_name,
            messages:[{key: id ,'value':msg,}]
        })
        console.log('response: ',response)
        return 'Success'
    }catch(err){
        console.error('An Error occured in create.js: ', err)
        return 'Failure'
    }
}