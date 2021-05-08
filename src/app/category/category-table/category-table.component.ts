import { Component, OnInit } from '@angular/core';
import {Category, CategoryService} from '../../services/categoryService';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.updateCategories();
  }

  updateCategories(): void {
    this.categoryService.getAll().subscribe(response => {
      this.categories = response;
    });
  }

  onDeleteCategory(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.categoryService.delete(id).subscribe(response => {
        this.updateCategories();
      });
    }
  }

}
