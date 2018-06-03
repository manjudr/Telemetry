/** 
 * @author Manjunath Davanam <manjunathd@ilimi.in>
 * @description      
 * 
 */
import { TelemetryInterface } from './lib/interface/telemetryInterface';
import { StartEvent } from './lib/interface/startInterface';
import { Config } from './lib/interface/configInterface';
import { External } from './lib/interface/externalInterface';
import { TelemetryHelper } from './lib/core/helper';
import * as defaultValues from './lib/core/constants';

class Telemetry implements TelemetryInterface {
    /**
     * @property  {Number}                  - Version of telemetry.
     */
    public version = defaultValues.VERSION;

    /**
     * @property  {Boolean}                 - Which defines telemetry initialization status.
     */
    private isInitialized = false;

    /**
     * @property  {Boolean}                 - Flag which is used to allow telemetry logs in the console or not.
     */
    private logConsole = defaultValues.ALLOW_CONSOLE_LOGS;

    /**
     * @property  {Number}                  - Which defines the default telemetry start time.
     */
    private startTime = defaultValues.START_TIME;

    /**
     * @property  {Array}                   - Which is used to hold the start event data
     */
    private startData = [];

    /**
     * @property {Fn}                       - Default library dispatcher
     */
    private dispatcher = defaultValues.DISPATCHER;


    /**
     * @param {configurations} Object       - Configuration object to initialize the telemetry lib.
     * @description                         - Which is used to initialize the telemetry library.
     */
    public initialize(configurations?: Config): void {

    };

    /**
     * @param {configurations} Object       - Configuration for the telemetry 
     * @param {id} String                   - Usually content identifier
     * @param {startEvent} Object           - Start event object (event data)
     * @param {others} Object               - Which is used to override the current context, object, tags, actor,runningEnv
     * @description                         - Which is used to log the telemetry start event data
     */
    public start(configurations?: Config, id?: string, ver?: string, eventData?: StartEvent, others?: External): void {
        const EVENT_NAME = 'START';
        !this.isInitialized && TelemetryHelper.init(configurations);
        TelemetryHelper.getEvent(EVENT_NAME, eventData);
    };

    /**
     * 
     */
    public end(eventData: object, others?: External): void {
        const EVENT_NAME = 'END';
    };

    public impression(eventData:object):void{
        const EVENT_NAME = 'IMPRESSION';
    };

    public interact(eventData:object):void{
        const EVENT_NAME = 'INTERACT';
    };
    public assess(eventData:object):void{
        const EVENT_NAME = 'ASSESS';
    };
    public response(eventData:object):void{
        const EVENT_NAME = 'RESPONSE';
    };
    public interrupt(eventData:object):void{
        const EVENT_NAME = 'INTERRUPT';
    };
    public feedback(eventData:object):void{
        const EVENT_NAME = 'FEEDBACK';
    };
    public share(eventData:object):void{
        const EVENT_NAME = 'SHARE';
    };
    public audit(eventData:object):void{
        const EVENT_NAME = 'AUDIT';
    };
    public error(eventData:object):void{
        const EVENT_NAME = 'ERROR';
    };
    public heartBeat(eventData:object):void{
        const EVENT_NAME = 'HEARTBEAT';
    };
    public log(eventData:object):void{
        const EVENT_NAME = 'LOG';
    };
    public search(eventData:object):void{
        const EVENT_NAME = 'SEARCH';
    };
    public metrics(eventData:object):void{
        const EVENT_NAME = 'METRICS';
    };
    public summary(eventData:object):void{
        const EVENT_NAME = 'SUMMARY';
    };
    public exdata(eventData:object):void{
        const EVENT_NAME = 'EXDATA';
    };
    
    private init():void{

    };
};

export default new Telemetry();

