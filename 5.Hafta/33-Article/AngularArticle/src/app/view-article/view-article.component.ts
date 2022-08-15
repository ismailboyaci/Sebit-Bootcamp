import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  articleIndex:any
  articlesData:Array<any>=[ ];
  username:string=''
  comment:string=''
  constructor(
    private route:ActivatedRoute,
    private articleService:ArticleService,
    private _snackBar:MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.articleIndex=this.route.snapshot.paramMap.get('articleIndex');
    this.articleService.getArticle().subscribe((res)=>{
      this.articlesData=res/* .filter((x: { id: any; })=>x.id==this.articleIndex+1); */
    })
  }
  addComment(){
    if (this.username == '' || this.comment == '') {
      this._snackBar.open('Tum alanlari doldurunuz', 'Kapat')
    } else {

      let commentData={
        username:this.username,
        comment:this.comment
      }
      this.articlesData[this.articleIndex].comments.push(commentData)
      this.articleService.postComment(this.articlesData[this.articleIndex]).subscribe((res)=>{
        /* this.router.navigateByUrl('home') */
        this.username='';
        this.comment='';
      })
    }
  }

}
