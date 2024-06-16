import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  @Input() displayPost: Post = {} as Post;
  @Output() deleteEvent = new EventEmitter<Post>();

  emitDelete():void{
    this.deleteEvent.emit(this.displayPost);
  }
}
