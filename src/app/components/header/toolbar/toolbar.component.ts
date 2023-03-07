import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
          style({opacity: 0}),
          animate('0.14s', style({opacity: 1}))
      ]),
      transition(':leave', [
          style({opacity: 1}),
          animate('0.14s', style({opacity: 0}))
      ])
  ])]

})

export class ToolbarComponent implements OnInit {

  functionEvent = new EventEmitter();

  emitEvent(){
    this.functionEvent.emit();
  }

  showMenu: boolean = true;
  showArrow: boolean = false;
  showSide: boolean = false;

  hideSideMenu(){
    this.showArrow = false;
    this.showSide = false;
    this.showMenu = true;
  };

  showSideMenu(){
    this.showMenu = false;
    this.showArrow = !this.showArrow;
    this.showSide = !this.showSide;
  };

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const numb = window.scrollY;
    if (numb >= 50){
      this.hideSideMenu()
    }
  }
 
  
  constructor(private scroller:ViewportScroller ) {}



  ngOnInit(): void {
    
  }

  goHeader() {
    document.getElementById('header')?.scrollIntoView({behavior:"smooth"});
    this.hideSideMenu()
  }

  goAbout() {
    document.getElementById('about')?.scrollIntoView({behavior:"smooth"});
    this.hideSideMenu()
  }

  goProjects() {
    document.getElementById('projects')?.scrollIntoView({behavior:"smooth"});
    this.hideSideMenu()
  }

  goContact() {
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"});
    this.hideSideMenu()
  }

}
