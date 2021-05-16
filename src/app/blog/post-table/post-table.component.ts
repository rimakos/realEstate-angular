import { Component, OnInit } from '@angular/core';
import {BlogService, Post} from '../../services/blog.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: BlogService) { }

  ngOnInit(): void {
    this.updatePosts();
  }
  updatePosts(): void{
    this.postService.getAll().subscribe(response =>{
      this.posts = response;
    });
  }
  onDeletePosts(id: number): void{
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete){
      this.postService.delete(id).subscribe(response =>
      {
        this.updatePosts();
      });
    }
  }

}
