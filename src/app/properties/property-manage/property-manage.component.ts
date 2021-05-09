import {Component, OnInit, Optional} from '@angular/core';
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
      this.propertyForm = this.createPropertyForm({
        categoryId: 0
      } as Property);
    }

    this.categoryService.getAll().subscribe(response => {
      this.categories = response;
    });
  }

  createPropertyForm(property: Property): FormGroup {
    return new FormGroup({
      id: new FormControl(property.id),
      title: new FormControl(property.title, Validators.required),
      type: new FormControl(property.type, Validators.required),
      propertyStatus: new FormControl(property.propertyStatus, Validators.required),
      categoryId: new FormControl(property.categoryId, [Validators.required, Validators.min(1)]),
      description: new FormControl(property.description),
      location: new FormControl(property.location, Validators.required),
      price: new FormControl(property.price, [Validators.required, Validators.min(1)]),
      yearBuild: new FormControl(property.yearBuild, [Validators.required, Validators.min(2000), Validators.max(2020)]),
      bedroom: new FormControl(property.bedroom, [Validators.required, Validators.min(1), Validators.max(20)]),
      bathroom: new FormControl(property.bathroom, [Validators.required, Validators.min(1), Validators.max(20)]),
      featured: new FormControl(property.featured),
    });
  }

  onSubmit(): void {
    this.propertyService.save(this.propertyForm.value)
      .subscribe(response => {
        return this.router.navigate(['/properties']);
      });
  }
}


