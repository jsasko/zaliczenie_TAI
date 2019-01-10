/*Connect with API, get posts, ID, create post*/
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Post>> {
    return this.http.get(this.url + '/api/posts').pipe(
      map((x: any[]) => x.slice(0, 10))
    );
  }

  getPost(id: string): Observable<Post> {
    return this.http.get(this.url + '/api/post/' + id);
  }

  createPost(post: Post): Observable<Post> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.post<Post>(this.url + '/api/post', post, options);
  }

}

class Post {
  title?: string;
  url?: string;
  content?: string;
}
