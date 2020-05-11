import { ConsoleDistributor } from './console-distributor'
import { SingleEngine } from './single-engine'
import { EventSpecificationParser } from './event-spec-parser'
import { EventGenerator, EventSpecification}  from './event-generator';

function main() {
    let eventSpecificationParser = new EventSpecificationParser();
    let eventSpec = eventSpecificationParser.fromFile('./spec');

    let eventGenerator = new EventGenerator(eventSpec);
    let event = eventGenerator.createEvent();

    let distributor = new ConsoleDistributor();

    let engine = new SingleEngine(eventGenerator, distributor);
    engine.run();
}

main()
