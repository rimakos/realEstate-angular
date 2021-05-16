import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogService, Post} from '../../services/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UploadService} from '../../services/upload.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-post-manage',
  templateUrl: './post-manage.component.html',
  styleUrls: ['./post-manage.component.css']
})

export class PostManageComponent implements OnInit {
  postForm = new FormGroup({});
  posts: Post[] = [];

  constructor(private blogService: BlogService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private uploadService: UploadService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.blogService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((post) => {
          this.postForm = this.createPostForm(post);
        });
    } else {
      this.postForm = this.createPostForm({
        id: 0
      } as Post);
    }
    this.blogService.getAll().subscribe(response => {
      this.posts = response;
    });
  }

  createPostForm(post: Post): FormGroup {
    return new FormGroup({
      id: new FormControl(post.id),
      title: new FormControl(post.title),
      description: new FormControl(post.description),
      photo: new FormControl(post.photo)
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
          this.postForm.patchValue({
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
    this.blogService.save(this.postForm.value)
      .subscribe(response => {
        return this.router.navigate(['/posts']);
      });
  }
}
