import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
data:any;
  constructor(private activerout:ActivatedRoute, private route:Router) {
    this.activerout.params.subscribe((params: any) => {
      this.data = params;
      console.log(this.data)
    });
   }

  ngOnInit(): void {
  }
  checkDetails(){
    alert("Interested")
    this.route.navigate(['profile'])
  }
  checkDetails1(){
    alert("Not Interested")
    this.route.navigate(['profile'])
  }
  checkDetails2(){
    alert("Shortlisted")
    this.route.navigate(['profile'])
  }

}
