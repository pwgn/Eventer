import { Distributor } from './distributor';
import { EventGenerator }  from './eventGenerator';

export interface Engine {
    eventGenerator: EventGenerator;
    distributor: Distributor;
    config: any;

    run(): void;
}
