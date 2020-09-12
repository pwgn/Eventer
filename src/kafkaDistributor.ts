import { Distributor } from './distributor'
import { Kafka, Producer } from 'kafkajs'

export class KafkaDistributor implements Distributor {
    config: any;
    kafka: Kafka;
    producer: Producer;

    constructor(config: any) {
        this.config = config
        this.kafka = new Kafka(this.config);
        this.producer = this.kafka.producer();
    }

    distribute(event: Record<string, string>) {
        this.producer.connect();
        console.log(event)
        this.producer.send({
            topic: this.config['topic'],
            messages: [
                { value: JSON.stringify(event) }
            ]
        });
    }

}
