import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';
import { catchError,  tap } from 'rxjs/operators';
import { EntityDef } from './classes/EntityDef';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

    private entityDefsUrl = 'http://localhost:3001/api/entityDefs';  // URL to web api
    private entityDefs = new Array<EntityDef>();

    constructor(
      private http: HttpClient,
      private messageService: MessageService){
      console.log(`ContactDataService.constructor`);
    }  

  
  /** GET getEntityDefs from the server */
  getEntityDefs (entityType:string): Observable<EntityDef[]> {

    return new Observable<EntityDef[]>((observer)=>{    
        let result =  this.http.get<EntityDef[]>(this.entityDefsUrl,httpOptions)      
        .pipe(
            tap(_ =>{ console.log(`Before entityDefs`);}),
//            map(val => { val.length}),
            tap(_ =>{ console.log(`After entityDefs`);}),
            catchError(this.handleError('getEntityDefs', []))
        );
        result.subscribe((data) => {
            let entityDef : EntityDef;
            for(let key in (data as any[])){
                if(!entityType || data[key]._name==entityType){
                    
                    entityDef= new EntityDef(data[key]._name,null,null);
                    this.entityDefs.push(entityDef);
                }
            }
            observer.next(this.entityDefs);
            observer.complete();
        });
        return {unsubscribe() {}};
    });
  }
    
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
