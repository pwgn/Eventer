import { ConsoleDistributor } from './consoleDistributor'
import { SingleEngine } from './singleEngine'
import { EventGenerator, EventSpecification}  from './eventGenerator';
import { KafkaDistributor } from './kafkaDistributor';
import { ContinuousEngine } from './contiuousEngine';
import { Config } from './config';

function main() {
    let config: Config = require('../config.json')
    let eventGenerator = new EventGenerator(config.eventSpec);
    let distributor = new KafkaDistributor(config.distributor);
    let engine = new ContinuousEngine(config.engine, eventGenerator, distributor);
    engine.run();
}

main()
