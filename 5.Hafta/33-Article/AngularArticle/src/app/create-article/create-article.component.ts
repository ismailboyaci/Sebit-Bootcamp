import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  content: string = '';
  username: string = '';
  title: string = '';


  constructor(
    private _snackBar: MatSnackBar,
    private articleService: ArticleService,
    private router : Router,
  ) { }
  ngOnInit(): void {
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '150px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic',],
      ['fontSize'],

    ]
  };

  post() {
    if (this.username == '' || this.title == '' || this.content == '') {
      this._snackBar.open('Tum alanlari doldurunuz', 'Kapat')
    } else {
      let postObj = {
        author: this.username,
        title: this.title,
        content: this.content,
        comments: [],
      }
      this.articleService.postArticle(postObj).subscribe((res) => {
        this.router.navigate(['/home']);
       })
    }
  };
}
