import { Distributor } from './distributor';
import { EventGenerator }  from './event-generator';

export interface Engine {
    eventGenerator: EventGenerator;
    distributor: Distributor;

    run(): void;
}
