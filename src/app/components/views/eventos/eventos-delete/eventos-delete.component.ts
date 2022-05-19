import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Eventos } from '../eventos.model';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos-delete',
  templateUrl: './eventos-delete.component.html',
  styleUrls: ['./eventos-delete.component.css']
})
export class EventosDeleteComponent implements OnInit {

  eventos: Eventos = {
    id:0,
    nome: '',
    local: '',
    data: '',
    horario: ''  
  }

  constructor(private service: EventosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   this.eventos.id = this.route.snapshot.params['id']
    this.findById()
  }

 findById(): void {
    this.service.findById(this.eventos.id!).subscribe((resposta) => {
      this.eventos.id = resposta.id
      this.eventos.nome = resposta.nome
      this.eventos.local = resposta.local
      this.eventos.data = resposta.data
      this.eventos.horario = resposta.horario   
    })
  }

  delete(): void {
    this.service.delete(this.eventos.id!).subscribe((resposta) => {
      this.router.navigate(['eventos'])
      this.service.mensagem('Evento deletado com sucesso!')
    }, err => {
      this.service.mensagem("Não foi possível deletar, ID Inválido!")
    })
  }

  cancel(): void {
    this.router.navigate(['eventos'])
  }

}
function id(id: any): number {
  throw new Error('Function not implemented.');
}

