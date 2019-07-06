import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  activeTab = 'Scripts';
  scriptsData;
  jobsData;
  searchSource;

  constructor(private appService: AppService){}

  ngOnInit(){
    this.renderScriptsView();
  }

  tabsHandler(event){
    this.searchSource = null;
    if(this.activeTab == 'Scripts'){
      this.renderScriptsView();
    }
    else if(this.activeTab == 'Jobs'){
      this.renderJobsView();
    }
  }

  renderScriptsView(){
    this.appService.getScripts().subscribe((res)=>{
        this.scriptsData = res.scripts;
    });
  }

  renderJobsView(){
    this.appService.getjobs().subscribe((res)=>{
        this.jobsData = res.jobs;
    });
  }

  applyFilter(filterValue: string) {
    if(!filterValue) {
      this.searchSource = (this.activeTab == 'Scripts')? this.scriptsData: this.jobsData;
    } else if(filterValue.length >= 1){
      if(this.activeTab == 'Scripts'){
        return this.searchSource = this.scriptsData.filter(x => x.script.name.trim().toLowerCase().includes(filterValue.trim().toLowerCase()));  
      }
      else{
        return this.searchSource = this.jobsData.filter(x => x.name.trim().toLowerCase().includes(filterValue.trim().toLowerCase()));  
      }
    }
  }
}
