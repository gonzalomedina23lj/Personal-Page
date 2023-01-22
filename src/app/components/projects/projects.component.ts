import { Component, OnInit } from '@angular/core';
import { CARDS } from 'src/app/shared/cards';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {
  

  cards = CARDS;

  

  
  


  ngOnInit(): void {

    

  }

}


 

