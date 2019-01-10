/*Connection with app-blog-list*/
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() content: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
