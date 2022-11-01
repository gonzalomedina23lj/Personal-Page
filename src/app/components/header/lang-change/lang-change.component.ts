import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-change',
  templateUrl: './lang-change.component.html',
  styleUrls: ['./lang-change.component.scss']
})
export class LangChangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /*   changeLang(lang:any){
    localStorage.setItem('lang', lang);
    window.location.reload();
  } */

  selectedLang='';
  changeLang(value:string):void{
    this.selectedLang=value;
    localStorage.setItem('lang', value);
    window.location.reload()
    console.log(value)
  }

}
