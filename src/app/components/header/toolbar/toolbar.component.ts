import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private scroller:ViewportScroller ) {
    
    

   }

  ngOnInit(): void {
    
  }

  goHeader() {
    document.getElementById('header')?.scrollIntoView({behavior:"smooth"});
    
  }

  goProjects() {
    document.getElementById('projects')?.scrollIntoView({behavior:"smooth"});
  }

  goContact() {
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"});
  }
}
