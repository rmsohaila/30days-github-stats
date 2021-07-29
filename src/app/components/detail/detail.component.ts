import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IRepository } from 'src/app/models/IRepository';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  loading = false;
  loadingMore = false;
  lang: string = '';
  repositories: IRepository[] = [];
  private page: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: RepositoryService
  ) {}

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('language') ?? '';
    this.loading = true;
    this.service
      .getRepositories(this.page, this.lang)
      .subscribe((repos: IRepository[]) => {
        this.repositories = repos;
        this.loading = false;
      });
  }

  loadMore() {
    this.loadingMore = true;
    this.page = this.page + 1;
    this.service
      .getRepositories(this.page, this.lang)
      .subscribe((repos: IRepository[]) => {
        this.repositories = this.repositories.concat(repos);
        this.loadingMore = false;
      });
  }
}
