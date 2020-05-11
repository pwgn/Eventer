import { Distributor } from './distributor'


export class ConsoleDistributor implements Distributor {

    distribute(event: Record<string, string>) {
        console.log("ConsoleDistributor: distribute:");
        console.log(event);
    }

}
