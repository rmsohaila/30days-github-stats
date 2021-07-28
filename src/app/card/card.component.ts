import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'git-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('avatar')
  _avatar!: String;
  @Input('url')
  _url!: String;
  @Input('name')
  _name!: String;
  @Input('description')
  _description!: String;
  @Input('stars')
  _stars!: string;
  @Input('issues')
  _issues!: string;
  @Input('author')
  _author!: String;

  public avatar: String;
  public url: String;
  public name: String;
  public description: String;
  public stars: string;
  public issues: string;
  public author: String;

  constructor() {
    this.avatar = this._avatar;
    this.url = this._url;
    this.name = this._name;
    this.description = this._description;
    this.stars = this._stars;
    this.issues = this._issues;
    this.author = this._author;

    console.log(this._author);
  }

  ngOnInit(): void {}
}
