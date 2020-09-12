
export interface Distributor {
    config: any;
    distribute(event: Record<string, string>): void;
}
