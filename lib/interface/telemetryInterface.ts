import { IStartEvent } from "./startInterface";
import { IConfig } from "./configInterface";
import { IConfig } from "./configInterface";

/** 
 * @description TelemetryInterface
*/
export interface TelemetryInterface {
    version: number;
    initialize(configurations:IConfig): void;
    start(event:IStartEvent): void;
    end(event: IEnd): void;
    impression(event: IImpression): void;
    interact(event: IInteract): void;
    assess(event: IAssess): void;
    response(event: IResponse): void;
    interrupt(event: IInterrupt): void;
    feedback(event: IFeedback): void;
    share(event: IShare): void;
    audit(event: IAudi): void;
    error(event: IError): void;
    heartBeat(event: IHeartbeat): void;
    log(event: ILog): void;
    search(event: ISearch): void;
    metrics(event: IMetrics): void;
    summary(event: ISummary): void;
    exdata(event: IExdata): void;
}