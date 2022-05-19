import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos } from '../eventos.model';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos-read-all',
  templateUrl: './eventos-read-all.component.html',
  styleUrls: ['./eventos-read-all.component.css']
})
export class EventosReadAllComponent implements OnInit {

 eventos: Eventos[] = [];

  displayedColumns: string[] = [
    "id",
    "nome",
    "local",
    "data",
    "horario",   
    "acoes",
  ];

  constructor(private service: EventosService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.eventos = resposta;
    });
  }

  navegarParaEventosCreate() {
    this.router.navigate(["eventos/create"]);
  }
}