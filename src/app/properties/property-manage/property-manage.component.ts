import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Property, PropertyService, PropertyStatus, Type} from '../../services/propertyService';
import {Category, CategoryService} from '../../services/categoryService';

@Component({
  selector: 'app-property-manage',
  templateUrl: './property-manage.component.html',
  styleUrls: ['./property-manage.component.css']
})
export class PropertyManageComponent implements OnInit {
  propertyForm = new FormGroup({});
  categories: Category[] = [];
  types: string[] = ['Duplex', 'Triplex', 'Studio'];
  statuses: string[] = ['Rent', 'Sale'];

  constructor(private categoryService: CategoryService,
              private propertyService: PropertyService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.propertyService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((property) => {
          this.propertyForm = this.createPropertyForm(property);
        });
    } else {
      this.propertyForm = this.createPropertyForm({} as Property);
    }

    this.categoryService.getAll().subscribe(response => {
      this.categories = response;
    });
  }

  createPropertyForm(property: Property): FormGroup {
    return new FormGroup({
      id: new FormControl(property.id),
      price: new FormControl(property.price, Validators.required),
      description: new FormControl(property.description, [Validators.required]),
      title: new FormControl(property.title),
      type: new FormControl(property.type),
      yearBuild: new FormControl(property.yearBuild),
      bedroom: new FormControl(property.bedroom),
      bathroom: new FormControl(property.bathroom),
      propertyStatus: new FormControl(property.propertyStatus),
      location: new FormControl(property.location),
      feautered: new FormControl(property.featured),
      categoryId: new FormControl(property.categoryId),
    });
  }

  onSubmit(): void {
    this.propertyService.save(this.propertyForm.value)
      .subscribe(response => {
        return this.router.navigate(['/properties']);
      });
  }
}


