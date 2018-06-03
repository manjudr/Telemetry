import {Dspec} from './dspecInterface';
import {Uspec} from './uspecInterface';

export interface StartEvent {
    type?: string;
    dspec?:Dspec;
    uaspec?:Uspec;
    loc?:string;
    mode?: string;
    pageid?: string;
    duration?:string;
}



