import {FieldProperty} from './FieldProperty';

export class Field {
  private _name: string;
  private _type: string;
  private _properties:FieldProperty[];
    
  constructor(name:string, type:string, properties:FieldProperty[]){
      this._name=name;
      this._type=type;
      this._properties=properties;
  }
  get name(){return this._name;}
  get type(){return this._type;}
  get properties(){return this._properties;}
  
}