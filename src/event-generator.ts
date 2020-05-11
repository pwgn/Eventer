import * as faker from 'faker';

export type EventSpecification = Record<string, string>;
export class EventGenerator {
    eventSpecification: EventSpecification;

    constructor(eventSpec: EventSpecification) {
        this.eventSpecification = eventSpec;
    }

    createEvent() {
        let event: Record<string, string> = {};
        for (let key in this.eventSpecification) {
            let fakerFunction = this.eventSpecification[key];
            event[key] = faker.fake(fakerFunction);
        }

        return event;
    }
}
