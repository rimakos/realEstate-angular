import {Component, OnInit} from '@angular/core';
import {Property, PropertyService, PropertyStatus} from '../../services/propertyService';
import {Category, CategoryService} from '../../services/categoryService';

@Component({
  selector: 'app-property-table',
  templateUrl: './property-table.component.html',
  styleUrls: ['./property-table.component.css']
})
export class PropertyTableComponent implements OnInit {

      properties: Property[] = [];

  constructor( private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.updateProperties();
  }

  updateProperties(): void {
    this.propertyService.getAll().subscribe(response => {
      this.properties = response;
    });
  }

  filterByStatus(status: string): void{
    this.propertyService.getByStatus(status).subscribe(response => {
      this.properties = response;
    });
  }

  onDeleteProperties(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.propertyService.delete(id).subscribe(response => {
        this.updateProperties();
      });
    }
  }
}
