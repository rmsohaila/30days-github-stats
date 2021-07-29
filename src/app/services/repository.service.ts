import { HttpClient } from '@angular/common/http';
import { IResponse } from '../models/IResponse';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { countBy } from '../helpers/countBy';
import { map } from 'rxjs/operators';
import { ILanguage } from '../models/ILanguage';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  readonly API_URL = 'https://api.github.com/search/repositories';
  private lastMonth;

  constructor(private http: HttpClient, private toast: ToastrService) {
    this.lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1))
      .toISOString()
      .split('T')[0];
  }

  getLanguages() {
    return this.http
      .get<IResponse>(
        `${this.API_URL}?q=created:>${this.lastMonth}&sort=stars&order=desc`
      )
      .pipe(
        map((result: IResponse) => {
          return countBy(result.items, 'language').map((l) => {
            return <ILanguage>{
              title: l.language,
              repositoryCount: l.count,
              popularity: 0,
            };
          });
        })
      );
  }
}
