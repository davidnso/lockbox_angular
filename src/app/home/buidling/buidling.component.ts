import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buidling',
  templateUrl: './buidling.component.html',
  styleUrls: ['./buidling.component.scss']
})
export class BuidlingComponent implements OnInit {
  constructor() {}
  residentials = [
    'Alex Haley Residential',
    'Lucretia Kennard Hall',
    'Harreit Tubman Hall',
    'Towers Hall'
  ];
  ngOnInit() {}
}
