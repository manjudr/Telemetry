/** 
 * @author Manjunath Davanam <manjunathd@ilimi.in>
 * @description      
 * 
 */
import {StartEvent} from './lib/interface/startInterface';
import {Config} from './lib/interface/configInterface';
import{External} from './lib/interface/externalInterface';
import {TelemetryHelper} from './lib/core/helper';
import * as defaultValues from './lib/core/constants';

let Telemetry = {
    /**
     * @property  {Number}                  - Version of telemetry.
     */
    version: defaultValues.VER,

    /**
     * @property  {Boolean}                 - Which defines telemetry initialization status.
     */
    isInitialized:false,

    /**
     * @property  {Boolean}                 - Flag which is used to allow telemetry logs in the console or not.
     */
    logConsole: defaultValues.ALLOW_CONSOLE_LOGS,

    /**
     * @property  {Number}                  - Which defines the default telemetry start time.
     */
    startTime:defaultValues.START_TIME,


    /**
     * @property  {Array}                   - Which is used to hold the start event data
     */
    startData:[],

    /**
     * @property {Fn}                       - Default library dispatcher
     */
    dispatcher: defaultValues.DISPATCHER,
    

    /**
     * @param {configurations} Object       - Configuration object to initialize the telemetry lib.
     * @description                         - Which is used to initialize the telemetry library.
     */
    initialize:(configurations:Config) => {
       try{ 
        TelemetryHelper.init(configurations);
       }catch(e){
           throw 'Fails to initialize the telemetry with the configurations';
       }
    },

    /**
     * @param {configurations} Object       - Configuration for the telemetry 
     * @param {id} String                   - Usually content identifier
     * @param {startEvent} Object           - Start event object (event data)
     * @param {others} Object               - Which is used to override the current context, object, tags, actor,runningEnv
     * @description                         - Which is used to log the telemetry start event data
     */
    start:(configurations?:Config, id?:String, ver?:String, stateEvent?:StartEvent, others?:External) =>{
        const EVENT_NAME = 'START';
        if(!this.isInitialized && configurations){
            TelemetryHelper.init(configurations);
        }
        TelemetryHelper.getEvent(EVENT_NAME, stateEvent);
    },

    /**
     * 
     */
    end:(endEvent?:Object, others?:External)=>{

    },

    init:()=>{

    }
};
export {Telemetry}

