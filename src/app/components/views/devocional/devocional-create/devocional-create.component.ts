import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Devocional } from '../devocional.model';
import { DevocionalService } from '../devocional.service';

@Component({
  selector: 'app-devocional-create',
  templateUrl: './devocional-create.component.html',
  styleUrls: ['./devocional-create.component.css']
})

export class DevocionalCreateComponent implements OnInit {

   devocional: Devocional = {
    tituloDevocional: '',
    textoVersiculo: '',
    textoDevocional: '',
    textoOracao: '',
    dataPostagem: '',
    horaPostagem: ''
  }

  constructor(private service: DevocionalService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.devocional).subscribe((resposta) => {
      this.router.navigate(['devocional'])
      this.service.mensagem('Devocional criado com sucesso!');
    },  err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['devocional'])
  }

}
