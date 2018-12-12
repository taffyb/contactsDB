import {Field} from './Field';

export class EntityDef {
    private GUID: string;
    private name: string;
    private fields:Field[];

    constructor(name:string,GUID:string,fields:Field[]){
        this.name = name;
    }
}