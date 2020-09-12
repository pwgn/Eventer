import { Distributor } from './distributor'


export class ConsoleDistributor implements Distributor {
    config: any;

    distribute(event: Record<string, string>) {
        console.log("ConsoleDistributor: distribute:");
        console.log(event);
    }

}
