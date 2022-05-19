import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from '../eventos.model';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos-update',
  templateUrl: './eventos-update.component.html',
  styleUrls: ['./eventos-update.component.css']
})
export class EventosUpdateComponent implements OnInit {

  eventos: Eventos = {
    id:0,
    nome: '',
    local: '',
    data: '',
    horario: ''  
  }

  constructor(
    private service: EventosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.eventos.id = this.route.snapshot.params['id']
    this.findById()
  }

 findById(): void {
    this.service.findById(this.eventos.id!).subscribe((resposta) => {
      this.eventos.nome = resposta.nome
      this.eventos.local = resposta.local
      this.eventos.data = resposta.data
      this.eventos.horario = resposta.horario   
    })
  }

  update(): void {
    this.service.update(this.eventos).subscribe((resposta) => {
      this.router.navigate(["eventos"]);
      this.service.mensagem("Evento atualizado com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['eventos'])
  }

}
function id(id: any): number {
  throw new Error('Function not implemented.');
}
