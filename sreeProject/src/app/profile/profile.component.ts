import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  profileInfo=[{name:'John',age:'27 yrs',height:'5ft',location:'chennai',wrok:'Doctor',nationalty:'India',Image:'assets/download.jfif'},
  {name:'Mary',age:'28 yrs',height:'6ft',location:'chennai1',wrok:'Teacher',nationalty:'India',Image:'assets/pro.webp'},
  {name:'John2',age:'29 yrs',height:'5.8ft',location:'chennai2',wrok:'software',nationalty:'India',Image:'assets/download.jfif'}]
  
  nextPage(item:any){
    console.log("testing")
    console.log("item",item)
  
    this.route.navigate(['detail',item])
  
  }
}
