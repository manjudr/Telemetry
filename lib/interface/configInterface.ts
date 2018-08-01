import {IPdata} from './pdataInterface'
import {ITarget} from './targetInterface'
import {IDispatcher} from './dispatcher'
import { libraryDispatcher} from '../dispatcher/dispatcher'
import * as defaultValues from '../core/constants';

export interface IConfig {
    dispatcher?: IDispatcher;
    batchsize?: number ;
    runningEnv?: string;
    channel: string;
    pdata: IPdata;
    object: ITarget;
    uid: string;
    env: string;
};

export interface ObjectData {
    type: string;
    id: string;
}

 
 


