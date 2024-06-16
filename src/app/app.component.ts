import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notTwitter';
}
