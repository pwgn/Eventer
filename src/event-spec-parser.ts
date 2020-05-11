import { EventSpecification}  from './event-generator';

export class EventSpecificationParser {

    fromFile(filePath: string) {
        const eventSpec: EventSpecification = {
            'name': '{{name.firstName}} {{name.lastName}}'
        };

        return eventSpec;
    }
}
