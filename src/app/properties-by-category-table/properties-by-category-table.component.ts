import {Component, OnInit} from '@angular/core';
import {Property, PropertyService} from '../services/propertyService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-properties-by-category-table',
  templateUrl: './properties-by-category-table.component.html',
  styleUrls: ['./properties-by-category-table.component.css']
})
export class PropertiesByCategoryTableComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService , private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.updateProperties();
  }

  updateProperties(): void {
    this.propertyService.getbyCategory(this.activeRoute.snapshot.params.id).subscribe(response => {
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
