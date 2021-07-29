import { Component, OnInit } from '@angular/core';

import { ILanguage } from 'src/app/models/ILanguage';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public loading = false;
  public languages: ILanguage[] = [];

  constructor(private service: RepositoryService) {
    this.loading = true;
    service.getLanguages().subscribe(result => {
      this.languages = result;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
