export interface ITarget {
    id?: string;
    ver?: string;
    type?: string;
    parent?: IParent;
}

export interface IParent {
    id?: string;
    type?: string;
}