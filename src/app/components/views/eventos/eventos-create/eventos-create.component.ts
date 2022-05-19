import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos } from '../eventos.model';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos-create',
  templateUrl: './eventos-create.component.html',
  styleUrls: ['./eventos-create.component.css']
})
export class EventosCreateComponent implements OnInit {

  eventos: Eventos = {
    nome: '',
    local: '',
    data: '',
    horario: ''  
  }

  constructor(private service: EventosService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.eventos).subscribe((resposta) => {
      this.router.navigate(['eventos'])
      this.service.mensagem('Evento criado com sucesso!');
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['eventos'])
  }

}
