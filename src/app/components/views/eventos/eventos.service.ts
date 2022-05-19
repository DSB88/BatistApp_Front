import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Eventos } from "./eventos.model";

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Eventos[]> {
    const url = `${this.baseUrl}/eventos`;
    return this.http.get<Eventos[]>(url);
  }

  findById(id: Number): Observable<Eventos> {
    const url = `${this.baseUrl}/eventos/${id}`
    return this.http.get<Eventos>(url)
  }

 create(eventos: Eventos): Observable<Eventos>{
    const url = `${this.baseUrl}/eventos`
    return this.http.post<Eventos>(url, eventos);
  }

  delete(id: Number):Observable<void> {
    const url = `${this.baseUrl}/eventos/${id}`
    return this.http.delete<void>(url)
  }

  update(eventos: Eventos):Observable<void> {
    const url = `${this.baseUrl}/eventos/${eventos.id}`
    return this.http.put<void>(url, eventos)
  }

 mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}