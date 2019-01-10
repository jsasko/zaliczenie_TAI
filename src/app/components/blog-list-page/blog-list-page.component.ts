import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.css']
})
export class BlogListPageComponent implements OnInit {

  public list;
  public filterText = '';
  constructor(private blogService: BlogService) {
      this.blogService.getAll().subscribe( (data) => {
        this.list = data;
      });
  }

  ngOnInit(): void {}

}
