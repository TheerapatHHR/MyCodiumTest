import { PostsService } from './posts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [PostsService]
})
export class TodoComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  toggle = true;
  status = 'Enable';
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) { }

  ngOnInit(): void {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.isFetching = true;
    this.postsService.fetchPost().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    });
  }



  onCreatePost(postData: Post) {
    // Send Http request
    postData.status = false;
    this.postsService.createAndStorePost(postData.task, postData.detail, postData.status);

  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;

    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
  }

  onHandleError(){
    this.error = null;
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onFinish(postStatus: boolean,postID: string){
    this.postsService.updateStatus(postStatus, postID);
    this.onFetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

}
