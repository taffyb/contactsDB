import {Field} from './Field';

export class Entity{
    private _name:string;
    private _type:string;
    private _properties:Field[];

    constructor(name:string, type:string,properties:Field[]){
        this._name= name;
        this._type=type;
        this._properties=properties;
    }
    get name(){return this._name;}
    get type(){return this._type;}
    get properties(){return this._properties;}
}