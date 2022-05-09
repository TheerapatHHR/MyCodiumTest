import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { Post } from "./post.model";
import { catchError, map } from "rxjs/operators";

@Injectable({providedIn:'root'})

export class PostsService{
  error = new Subject<string>();

  constructor(private http: HttpClient){}

  createAndStorePost(task: string, detail: string, status: boolean){
    const postData: Post = {task: task, detail: detail, status: status};
    this.http
    .post< {name: string} >(
      'https://todolists-2a374-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData,
      {
        observe: 'response'
      }
      )
      .subscribe( responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPost(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');
    return this.http
    .get<{ [ key: string]: Post }>(
      'https://todolists-2a374-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',{
        headers: new HttpHeaders({"Custom-Header": 'Hello'}),
        params: searchParams
    }
      )
      .pipe(
        map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData){
          if(responseData.hasOwnProperty(key)){
          postsArray.push({ ...responseData[key], id:key  });
          }
        }
        return postsArray;
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
      );
  }

  deletePosts(){
    return this.http.delete('https://todolists-2a374-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json');
  }

  updateStatus(status: boolean, id: string){
    return this.http.delete('https://todolists-2a374-default-rtdb.asia-southeast1.firebasedatabase.app/posts'+'/'+id+'.json')
    .subscribe( () => {
      console.log(id);
    } )
    ;
  }




}
