export class FieldProperty{
    private _name: string;
    private _value: string;

    constructor(name:string,value:string){
        this._name=name;
        this._value=value;
    }
    
    get name(){return this._name;}
    get value(){return this._value;}
}