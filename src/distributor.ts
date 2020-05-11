
export interface Distributor {
    distribute(event: Record<string, string>): void;
}
