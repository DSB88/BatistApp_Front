import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devocional } from './devocional.model';

@Injectable({
  providedIn: 'root'
})
export class DevocionalService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Devocional[]> {
    const url = `${this.baseUrl}/devocional`;
    return this.http.get<Devocional[]>(url);
  }

  findById(id: Number): Observable<Devocional> {
    const url = `${this.baseUrl}/devocional/${id}`
    return this.http.get<Devocional>(url)
  }

  create(devocional: Devocional): Observable<Devocional>{
    const url = `${this.baseUrl}/devocional`
    return this.http.post<Devocional>(url, devocional);
  }

  delete(id: Number):Observable<void> {
    const url = `${this.baseUrl}/devocional/${id}`
    return this.http.delete<void>(url)
  }

  update(devocional: Devocional):Observable<void> {
    const url = `${this.baseUrl}/devocional/${devocional.id}`
    return this.http.put<void>(url, devocional)
  }

 mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}
