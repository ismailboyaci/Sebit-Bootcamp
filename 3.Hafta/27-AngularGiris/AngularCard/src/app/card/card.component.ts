import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../model/card';

/* interface Card {
  title:string,
  imageUrl:string,
  username:string,
  content:string
} */

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titleChild : string = '';
  @Input() imageUrlChild : string = '';
  @Input() usernameChild : string = '';
  @Input() contentChild : string = '';
  @Input() post : Card = {
    title:'',
    content:'',
    imageUrl:'',
    username:''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
