import {IDspec} from './dspecInterface';
import {IUspec} from './uspecInterface';

export interface IStartEvent {
    type?: string;
    dspec?:IDspec;
    uaspec?:IUspec;
    loc?:string;
    mode?: string;
    pageid?: string;
    duration?:string;
}



