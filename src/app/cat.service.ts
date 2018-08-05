import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class CatService {

  constructor(private http: HttpClient) {
  }

  getCats() {
    return this.http.get('http://localhost:3000/cat');
  }

  createCat(newCat) {
    return this.http.post(`http://localhost:3000/cat`, newCat).pipe(
      catchError(error => Observable.throw(error))
    );
  }

  deleteCat(id) {
    return this.http.delete(`http://localhost:3000/cat/${id}`);
  }

}
