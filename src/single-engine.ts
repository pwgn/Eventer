import { Distributor } from './distributor';
import { Engine } from './engine';
import { EventGenerator }  from './event-generator';

export class SingleEngine implements Engine {
    eventGenerator: EventGenerator;
    distributor: Distributor;

    constructor(eventGenerator: EventGenerator, distributor: Distributor) {
        this.eventGenerator = eventGenerator;
        this.distributor = distributor;
    }

    run() {
        console.log("Engine: run");
        let event = this.eventGenerator.createEvent();
        this.distributor.distribute(event);
        console.log("Engine: complete");
    }
}
