export interface Target {
    id?: string;
    ver?: string;
    type?: string;
    parent?: Parent;
}

export interface Parent {
    id?: string;
    type?: string;
}