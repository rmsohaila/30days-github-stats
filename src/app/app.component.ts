import { Component } from '@angular/core';
import { RepositoryService } from './services/repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GithubStats';
}
