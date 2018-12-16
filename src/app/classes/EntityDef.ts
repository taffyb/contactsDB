import {Field} from './Field';

export class EntityDef {
    private _GUID: string;
    private _name: string;
    private _fields:Field[];

    constructor(name:string,GUID:string,fields:Field[]){
        this._name = name;
        this._GUID = GUID;
        this._fields=fields;
    }
    get name(){return this._name;}
    get GUID(){return this._GUID;}
    get fields(){return this._fields;}
    set name(name:string){this._name=name;}
}