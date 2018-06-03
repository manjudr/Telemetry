import {Pdata} from './pdataInterface'
import {Target} from './targetInterface'
import { libraryDispatcher} from '../dispatcher/dispatcher'
import * as defaultValues from '../core/constants';

export interface Config {
    dispatcher?: any;
    batchsize?: number ;
    runningEnv?: string;
    channel: string;
    pdata: Pdata;
    object: Target;
    uid: string;
    env: string;
};

export interface ObjectData {
    type: string;
    id: string;
}

 
 


