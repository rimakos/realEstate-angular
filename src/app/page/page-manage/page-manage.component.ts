import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Page, PageService} from '../../services/page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UploadService} from '../../services/upload.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-page-manage',
  templateUrl: './page-manage.component.html',
  styleUrls: ['./page-manage.component.css']
})
export class PageManageComponent implements OnInit {

  pageForm = new FormGroup({});
  pages: Page [] = [];

  constructor(private router: Router,
              private uploadService: UploadService,
              private activeRoute: ActivatedRoute,
              private pageService: PageService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.pageService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((page) => {
          this.pageForm = this.createPageForm(page);
        });
    } else {
      this.pageForm = this.createPageForm({} as Page);
    }
  }

  createPageForm(page: Page): FormGroup {
    return new FormGroup({
      id: new FormControl(page.id),
      title: new FormControl(page.title),
      photo: new FormControl(page.photo),
      content: new FormControl(page.content)
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
          this.pageForm.patchValue({
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
    this.pageService.save(this.pageForm.value)
      .subscribe(response => {
        return this.router.navigate(['/pages']);
      });
  }
}
