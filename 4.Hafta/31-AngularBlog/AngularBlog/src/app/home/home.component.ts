import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

interface IBlogData {
  title: string,
  body: string,
  imageId: number,
  userId: number,
  id: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  blogData: Array<IBlogData> = [];
  page: number = 0;
  pageSize: number = 8;

  constructor(private blogService: BlogService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    });
  }
  openDialaog(element:any,viewOrUpdate:boolean){
    const dialogRef = this.dialog.open(BlogDialogComponent,{
      width:'450px',
      data:{blog:element,isUpdate:viewOrUpdate},
    });

    dialogRef.afterClosed().subscribe(()=>{
      this.getBlogList();
    })
  }
  getBlogList(){
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    });
  }
}
