import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.css']
})
export class BlogDetailsPageComponent implements OnInit {

  post: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getPost(this.route.snapshot.paramMap.get("id")).subscribe((data) => {
      this.post = data;
    });
  }

}
