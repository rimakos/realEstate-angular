import {Component, OnInit} from '@angular/core';
import {Category, CategoryService} from '../../services/categoryService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.css']
})
export class CategoryManageComponent implements OnInit {

  categoryForm = new FormGroup({});


  constructor(private categoryService: CategoryService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.categoryService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((category) => {
          this.categoryForm = this.createCategoryForm(category);
        });
    } else {
      this.categoryForm = this.createCategoryForm({} as Category);
    }
  }

  createCategoryForm(category: Category): FormGroup {
    return new FormGroup({
      id: new FormControl(category.id),
      name: new FormControl(category.name, Validators.required),
    });
  }

  onSubmit(): void {
    this.categoryService.save(this.categoryForm.value)
      .subscribe(response => {
        return this.router.navigate(['/categories']);
      });
  }

}

