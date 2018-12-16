import { Component, OnInit } from '@angular/core';
import { ContactDataService } from '../contact-data.service';
import { EntityDef } from '../classes/EntityDef';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  entityDefs:EntityDef[];

  constructor(private dataService:ContactDataService) {
  }
  
  getEntityDefs(): void {
      const that= this;
      const observabale = this.dataService.getEntityDefs(null);

      observabale.subscribe(
          {next(data){that.entityDefs = data; console.log(`data ${JSON.stringify(data)}`);}
      });
    }
  ngOnInit() { 
      this.getEntityDefs();
      
      
  }

}
