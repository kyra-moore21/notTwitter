import { Component } from '@angular/core';
import { SinglePostComponent } from '../single-post/single-post.component';
import { FormComponent } from '../form/form.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [SinglePostComponent, FormComponent],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
    AllPosts:Post[] = [
      {
        title: "Hi",
        body: "Here lies all my thoughts..."
      },
      {
        title: "Head Empty",
        body: "No thought"
      },
      {
        title: "I need these to survive",
        body: "my noise cancelling headphones saved my life"
      },
    ]
    
    deleteItem(i:Post):void {
      let index: number = this.AllPosts.findIndex(x => x == i);
      this.AllPosts.splice(index, 1);
    }
    addItem(i:Post){
      this.AllPosts.push(i);
    }
}
