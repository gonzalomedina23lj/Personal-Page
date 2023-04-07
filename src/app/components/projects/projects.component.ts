import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/shared/card';
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

  getVideoElement(card: Card): HTMLVideoElement | null {
    return document.getElementById(`projectvideo-${card.Title}`) as HTMLVideoElement;
  }
  

  

  
  cards = CARDS;
  

  constructor() {}

  
  ngOnInit(): void {}

  playVideo(card: Card) {
    card.isPlaying = true;
    const video = this.getVideoElement(card);
    if (video) {
      video.play();
      card.showPause = true;
      card.showPlay = false;
    }
  }
  
  pauseVideo(card: Card) {
    card.isPlaying = false;
    const video = this.getVideoElement(card);
    if (video) {
      video.pause();
      card.showPause = false;
      card.showPlay = true;
    }
  }

}

 

