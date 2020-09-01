import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {
  private apiUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  loginUser(payload) {
    return this.http.post(this.apiUrl + 'login', payload)
  }

  registerUser(payload) {
    return this.http.post(this.apiUrl + 'signUp', payload)
  }

  createTodo(payload) {
    return this.http.post(this.apiUrl + 'createTodo', payload)
  }

  getAllTodo() {
    return this.http.get(this.apiUrl + 'getAllTodo')
  }

  updateTodo(_id, payload) {
    return this.http.patch(this.apiUrl + 'updateTodo/' + _id, payload)
  }

  deleteTodo(_id) {
    return this.http.delete(this.apiUrl + 'deleteTodo/' + _id)
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
