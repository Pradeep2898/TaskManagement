import { Component, NgModule, VERSION, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventComponent } from './event/event.component'
import { DayComponent } from './day/day.component'
import { RouterModule, Routes, Router } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common'
import { FormsModule, FormControl ,FormGroup, ReactiveFormsModule } from '@angular/forms'

const appRoute: Routes = [
  {path:'event', component:EventComponent},
  {path:'day', component:DayComponent},
  {path:'', redirectTo:'event', pathMatch:'full'}
  ];
  
@Component({
  selector: 'app-root',
  templateUrl: 'src/app/app.html',
  styleUrls: ['src/app/app.css']
})
export class App implements OnInit{
    myform: FormGroup;
    events: any[] = [{
    Name:"Workout",
    Time:"6:00 am",
    Location:"Newton Park",
    Description:"Health is Wealth.",
    Agenda:"300cAl burn."
  },
  {
    Name:"Shopping",
    Time:"9:00 am",
    Location:"Spencer",
    Description:"Buy something for her.",
    Agenda:""
  },
  {
    Name:"Product review",
    Time:"10:30 am",
    Location:"TCS Sipcot",
    Description:"Reviewing the new version of the existing project.",
    Agenda:"Fulfill client's requirements."
  },
  {
    Name:"Meeting",
    Time:"6:00 pm",
    Location:"Taj Residency",
    Description:"Very useless meeting, Could be emailed as well.",
    Agenda:"Same fking boot licking"
  },
  {
    Name:"First Date",
    Time:"10:00 pm",
    Location:"Taj Mahal",
    Description:"First ever dinner with her",
    Agenda:"Gonna propose her"
  }];
  
  summary: any = {
  weather: "Cloudy",
  temperature: "30⁰C",
  forecast: "Maximum temperature today near 30 degrees. A partly cloudy and warm day is expected. Lowest relative humidity near 33 percent. Expect 13 hours of sunshine, which is 87 percent of possible sunshine. Average winds will be Northeast at 8 MPH during the morning and Northeast at 9 MPH during the afternoon."
  };
  
  deleteEvent(event: any) {
  const itemIndex = this.events.findIndex(el => el === event);
  this.events.splice(itemIndex, 1);
  }
  
  addEvent(data):void {
    console.log("fuck you");
    console.log(data);
    this.events.push({
      Name:data.Name, 
      Time:data.Time, 
      Location:data.Location,
      Description:data.Description,
      Agenda:data.Agenda});
  }
  heading: string;
 
  constructor(private router: Router) {}
  ngOnInit() {
   this.myform = new FormGroup({
    Name : new FormControl(),
    Time : new FormControl(),
    Location : new FormControl(),
    Description : new FormControl(),
    Agenda : new FormControl()
   });
  }
  
  goHome():void {
    console.log("home component");
    this.router.navigate(['/event']);
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoute)],
  declarations: [App, EventComponent, DayComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [App]
})
export class AppModule {
 
}
