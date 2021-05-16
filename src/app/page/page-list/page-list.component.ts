import {Component, OnInit} from '@angular/core';
import {Page, PageService} from '../../services/page.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  pages: Page [] = [];

  constructor(private pageService: PageService) {
  }

  ngOnInit(): void {
    this.updatePages();
  }

  updatePages(): void {
    this.pageService.getAll().subscribe(response => {
      this.pages = response;
    });

  }

  onDeletePages(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.pageService.delete(id).subscribe(response => {
        this.updatePages();
      });
    }
  }
}
