import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleData:any
  constructor(
    private articleService: ArticleService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.articleService.getArticle().subscribe((res)=>{
      this.articleData=res;
    })
  }



}
