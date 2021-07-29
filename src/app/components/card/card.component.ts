import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'git-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // Repository Inputs
  @Input() public url: string = '';
  @Input() public name: string = '';
  @Input() public description: string = '';
  @Input() public stars: number = 0;
  @Input() public issues: number = 0;
  // Owner Inputs
  @Input() public avatar: string = '';
  @Input() public owner: string = '';

  constructor() {}

  ngOnInit(): void {}
}
