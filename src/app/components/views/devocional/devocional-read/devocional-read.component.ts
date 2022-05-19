import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Devocional } from "../devocional.model";
import { DevocionalService } from "../devocional.service";

@Component({
  selector: "app-devocional-read",
  templateUrl: "./devocional-read.component.html",
  styleUrls: ["./devocional-read.component.css"],
})
export class DevocionalReadComponent implements OnInit {
  devocional: Devocional[] = [];

  displayedColumns: string[] = [
    "id",
    "tituloDevocional",
    "textoVersiculo",
    "textoDevocional",
    "textoOracao",
    "dataPostagem",
    "horaPostagem",
    "acoes",
  ];

  constructor(private service: DevocionalService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.devocional = resposta;
    });
  }

  navegarParaDevocionalCreate() {
    this.router.navigate(["devocional/create"]);
  }
}
