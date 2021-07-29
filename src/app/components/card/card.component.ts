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
  @Input() public stars: string = '';
  @Input() public issues: string = '';
  // Owner Inputs
  @Input() public avatar: string = '';
  @Input() public owner: string = '';

  constructor() {}

  ngOnInit(): void {}
}
