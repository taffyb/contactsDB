import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../contact-data.service';
import { EntityDef } from '../classes/EntityDef';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  providers:[ContactDataService],
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  entityDefs:EntityDef[];

  constructor(private dataService:ContactDataService) {
  }
  
  getEntityDefs(): void {
      const that= this;
      const observabale = this.dataService.getEntityDefs(null);

      observabale.subscribe(   {
          next(data){this.entityDefs = data;
              that.entityDefs = data;
          },
//          complete() { console.log('Finished sequence'); }
      });
    }
  ngOnInit() { 
      this.getEntityDefs();
  }

}
