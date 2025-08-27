import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';

@Component({
  selector: 'app-star-rating-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './star-rating-component.html',
  styles:  [
    `
  .star-rating {
    display:flex;
    gap: 0.25rem;
      }
    .span-box {
      font-size:3em;
      color: #DAA520;
    }  
      `,
  ]
})
export class StarRatingComponent implements OnInit{
  @Input() stars = 5
  rating = signal(0);
  // hoverRating = signal<number|null>(null);
  @Output() ratingChange = new EventEmitter<number>()
  constructor() {}

  ngOnInit() {}

setRating(value:number) {
  this.rating.set(value);
  this.ratingChange.emit(value)
}

// setHover(value:number|null) {
//   this.hoverRating.set(value)
// }

get displayRating():number {
  return  this.rating();
}

}
