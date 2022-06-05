import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imageSwipe';
  constructor(private route:Router){

  }
profileInfo=[{name:'John',age:'27 yrs',height:'5ft',location:'chennai',wrok:'Doctor',nationalty:'India',Image:'assets/download.jfif'},
{name:'Mary',age:'28 yrs',height:'6ft',location:'chennai1',wrok:'Teacher',nationalty:'India',Image:'assets/pro.webp'},
{name:'John2',age:'29 yrs',height:'5.8ft',location:'chennai2',wrok:'software',nationalty:'India',Image:'assets/download.jfif'}]

nextPage(item:any){
  console.log("testing")
  console.log("item",item)

  this.route.navigate(['profile',item])

}
}