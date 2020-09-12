import { Distributor } from './distributor';
import { Engine } from './engine';
import { EventGenerator }  from './eventGenerator';

export class ContinuousEngine implements Engine {
    eventGenerator: EventGenerator;
    distributor: Distributor;
    config: any;

    constructor(config: any, eventGenerator: EventGenerator, distributor: Distributor) {
        this.eventGenerator = eventGenerator;
        this.distributor = distributor;
        this.config = config;
    }

    async run() {
        console.log("Engine: run");
        let count: number = this.config['count']
        while(count != 0) {
            let event = this.eventGenerator.createEvent();
            this.distributor.distribute(event);
            await this.delay(this.config['delay']);
            count--
        }
        console.log("Engine: complete");
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
