import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-inteview-create',
  templateUrl: './create.component.html',
 
})
export class InterviewCreateComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    submit(f){
 
    // if(f.valid){
    //     if(this.step < 3){
    //     this.step += 1;
    //     this.goNextForm(this.step);

    //     }else{
    //     //interview service save here

    //     }
    // }
  }

}
