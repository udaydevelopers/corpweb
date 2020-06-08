import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private _blogs:BlogService) { }

  ngOnInit() {
    this.blogs = this._blogs.getBlogs();
  }

  public blogs = [];

}
