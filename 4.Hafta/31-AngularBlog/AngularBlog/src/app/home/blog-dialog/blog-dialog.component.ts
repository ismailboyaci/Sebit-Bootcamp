import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { IBlogData } from '../home.component';
import { CommentService } from 'src/app/services/comment.service';




@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent implements OnInit {

  isUpdate: boolean = false;
  blogElement: IBlogData;
  commentData: any;


  blogForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BlogDialogComponent>,
    private blogService: BlogService,
    private commentService: CommentService,
  ) {
    //duzenleme
    if (data.isUpdate) {
      this.isUpdate = true;
      this.blogForm.patchValue({
        title: data.blog.title,
        body: data.blog.body,
      })
      this.blogElement = data.blog;
    }
    //Goruntuleme
    else {
      this.isUpdate = false;
      this.blogElement = data.blog
    }
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((res) => {
      this.commentData= res.filter((x: { postId: any; })=>x.postId == this.data.blog.id);
    })
  }

  close() {
    this.dialogRef.close()
  }

  onSubmit() {
    const request = {
      title: this.blogForm.get('title')?.value,
      body: this.blogForm.get('body')?.value,
      /* id:this.data.blog.id, */
      userId: this.data.blog.userId,
      imageId: this.data.blog.imageId
    }

    this.blogService.updatePost(this.data.blog.id, request).subscribe((res) => {
      this.blogElement.title = res.title;
      this.blogElement.body = res.body;
      this.close();

    })
  }

}
