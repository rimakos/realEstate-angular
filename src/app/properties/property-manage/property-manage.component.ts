import {Component, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Property, PropertyService, PropertyStatus, Type} from '../../services/propertyService';
import {Category, CategoryService} from '../../services/categoryService';
import {UploadService} from '../../services/upload.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

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
              private activeRoute: ActivatedRoute,
              private uploadService: UploadService) {
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
      feautered: new FormControl(property.featured),
      photo: new FormControl(property.photo)
    });
  }

  uploadFile(event: any): void {
    const file: File | null = event.target.files.item(0);
    if (!file) {
      return;
    }

    this.uploadService.upload(file).subscribe(
      (httpEvent: any) => {
        if (httpEvent.type === HttpEventType.UploadProgress) {
          console.log(Math.round(100 * event.loaded / event.total));
        } else if (httpEvent instanceof HttpResponse) {
          this.propertyForm.patchValue({
            photo: file.name,
          });
        }
      },
      (err: any) => {
        console.log(err);
        alert('Error uploading file');
      });
  }


  onSubmit(): void {
    this.propertyService.save(this.propertyForm.value)
      .subscribe(response => {
        return this.router.navigate(['/properties']);
      });
  }
}


