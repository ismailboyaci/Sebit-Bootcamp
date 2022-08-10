import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  place: string = 'Enter The Phone Number'
  pNumber: any;
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  countries = ['tr', 'uk', 'us']
  ulke: string = ''



  country = new FormControl('')

  pipeForm = new FormGroup({
    phoneNumber: new FormControl('', [Validators.pattern(this.numberRegEx)])
  })


  onChange() {
    this.pNumber = this.pipeForm.value.phoneNumber
  }

  onSelect(e: any) {
    this.ulke = e.value
  }

  getPlaceHolder(): any {
    if (this.ulke == 'tr') {
      this.place = 'Enter a 10 digit number.'
      return this.place
    }
    if (this.ulke == 'uk') {
      this.place = 'Enter a 11 digit number.'
      return this.place
    }
    if (this.ulke == 'us') {
      this.place = 'Enter a 10 digit number.'
      return this.place
    }
    return this.place
  }
}
