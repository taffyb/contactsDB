import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EntityDef } from './classes/EntityDef';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entityDefs = new Array<EntityDef>();
    
    entityDefs.push(new EntityDef("Person",null,null));
    entityDefs.push(new EntityDef("Company",null,null));
    entityDefs.push(new EntityDef("Event",null,null));
    
    return {entityDefs};
  }

}