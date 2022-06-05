import { Component } from '@angular/core';

export interface Post {
  title: string
  text:string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {
      title:'Letn components',
      text: 'loren10',
      id:1
    },
    {
      title:'Letn components 2',
      text: 'loren20',
      id:2
    }
  ]

  updatePosts(post:Post) {
    this.posts.unshift(post)
  }
}
