import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CARDS } from 'src/app/shared/cards';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})



export class ProjectsComponent implements OnInit{


  showPlay:boolean = true;
  showPause:boolean = false;
  @ViewChild('projectvideo') projectvideo!: ElementRef;
  @ViewChild('playerbutton') playerbutton!: ElementRef;
  

  

  
  cards = CARDS;
  

  constructor() {}

  
  ngOnInit(): void {}

  playVideo() {
    this.showPlay = false;
    this.showPause = true;
    this.projectvideo.nativeElement.play();

  }
  
  pauseVideo() {
    this.showPause = false;
    this.showPlay = true;
    this.projectvideo.nativeElement.pause();

  }

}


 

