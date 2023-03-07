import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  textList: Array<string> = ['header.dinamic_text.think', 'header.dinamic_text.work','header.dinamic_text.phrase_1', 'header.dinamic_text.phrase_2', 'header.dinamic_text.word_1', 'header.dinamic_text.word_2', 'header.dinamic_text.word_3', 'header.dinamic_text.word_4'];
  thinkWord!: string;
  workWord!: string;
  firstWord!: string;
  secondWord!: string;
  thirdWord!: string;
  fourthWord!: string;
  firstPhrase!: string;
  secondPhrase!: string;

  

  

  constructor() { }

  
  ngOnInit() {
    this.thinkWord = this.textList[0];
    this.workWord = this.textList[1];
    this.firstWord = this.textList[4];
    this.secondWord = this.textList[5];
    this.thirdWord = this.textList[6];
    this.firstPhrase = this.textList[2];
    this.secondPhrase = this.textList[3];

}
  
}
