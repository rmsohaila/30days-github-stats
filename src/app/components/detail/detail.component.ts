import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  loadingMore = false;
  lang: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.lang = activatedRoute.snapshot.paramMap.get('language') ?? '';
  }

  ngOnInit(): void {}

  loadMore() {
    this.loadingMore = true;
    setTimeout(() => {
      this.loadingMore = false;
    }, 2000);
  }
}
