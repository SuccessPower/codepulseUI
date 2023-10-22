import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-categories-request-model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>(`https://localhost:7263/api/categories`, model);
  }
}
