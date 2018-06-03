/** 
 * @description TelemetryInterface
*/
export interface TelemetryInterface {
    version: number;
    initialize(configurations): void;
    start(): void;
    end(event: Object): void;
    impression(event: Object): void;
    interact(event: Object): void;
    assess(event: Object): void;
    response(event: Object): void;
    interrupt(event: Object): void;
    feedback(event: Object): void;
    share(event: Object): void;
    audit(event: Object): void;
    error(event: Object): void;
    heartBeat(event: Object): void;
    log(event: Object): void;
    search(event: Object): void;
    metrics(event: Object): void;
    summary(event: Object): void;
    exdata(event: Object): void;
}