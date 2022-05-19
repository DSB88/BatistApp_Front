import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Devocional } from '../devocional.model';
import { DevocionalService } from '../devocional.service';

@Component({
  selector: 'app-devocional-delete',
  templateUrl: './devocional-delete.component.html',
  styleUrls: ['./devocional-delete.component.css']
})
export class DevocionalDeleteComponent implements OnInit {

   devocional: Devocional = {
    id:0,
    tituloDevocional: '',
    textoVersiculo: '',
    textoDevocional: '',
    textoOracao: '',
    dataPostagem: '',
    horaPostagem: ''
  }
  constructor(private service: DevocionalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {  
   this.devocional.id = this.route.snapshot.params['id']
    this.findById()
  }

  findById(): void {
    this.service.findById(this.devocional.id!).subscribe((resposta) => {
      this.devocional.id = resposta.id
      this.devocional.tituloDevocional = resposta.tituloDevocional
      this.devocional.textoVersiculo = resposta.textoVersiculo
      this.devocional.textoDevocional = resposta.textoDevocional
      this.devocional.textoOracao = resposta.textoOracao
      this.devocional.dataPostagem = resposta.dataPostagem
      this.devocional.horaPostagem = resposta.horaPostagem
    })
  }

  delete(): void {
    this.service.delete(this.devocional.id!).subscribe((resposta) => {
      this.router.navigate(['devocional'])
      this.service.mensagem('Devocional deletado com sucesso!')
    }, err => {
      this.service.mensagem("Não foi possível deletar, ID Inválido!")
    })
  }

  cancel(): void {
    this.router.navigate(['devocional'])
  }

}
function id(id: any): number {
  throw new Error('Function not implemented.');
}

