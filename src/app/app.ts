import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomHighlight } from './custom';
import { StarRatingComponent } from './star-rating-component/star-rating-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    // CustomHighlight,
     StarRatingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-practice';
  count = signal(0)
  doubleCount = computed(()=>this.count()*2)

increment() {

}

}

