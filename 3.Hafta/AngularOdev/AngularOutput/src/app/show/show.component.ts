import { Component, OnInit, } from '@angular/core';


export interface UserTable {
  name: string;
  position: number;
  surname: string;
  age: number;
}



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
   UserData: UserTable[] = [
    {position: 1, name: 'ismail', surname: 'boyaci', age: 25},
    {position: 2, name: 'cemre', surname: 'boyaci', age: 20},
    {position: 3, name: 'zeynep', surname: 'bilge', age: 24},

  ];

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'surname', 'age'];
  dataSource = this.UserData;

  AddUser(item:{name:string,surname:string,age:number})
  {
    let pos = this.UserData.length+1
    this.UserData=this.UserData.concat({position:pos,name:item.name,surname:item.surname,age:item.age})
    this.dataSource=this.UserData

  }

}
