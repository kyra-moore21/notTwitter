import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
formPost: Post = {} as Post;
@Output() CreatedEvent = new EventEmitter<Post>();
display:boolean = false;

submitForm():void {
  let newPost: Post = { ...this.formPost};
  this.CreatedEvent.emit(newPost);
  this.formPost = {} as Post;
}

toggleDisplay(){
  this.display = !this.display;
}
}
