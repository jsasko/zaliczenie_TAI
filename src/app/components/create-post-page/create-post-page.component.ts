import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css']
})
export class CreatePostPageComponent implements OnInit {

  post: Post;
  constructor(private blogService: BlogService) {
    this.post = new Post();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.blogService.createPost(this.post).subscribe( (post) => {
      console.log(post);
    });
  }

}

class Post {
  title?: string;
  url?: string;
  content?: string;
}
