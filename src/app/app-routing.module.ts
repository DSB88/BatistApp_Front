import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevocionalCreateComponent } from './components/views/devocional/devocional-create/devocional-create.component';
import { DevocionalDeleteComponent } from './components/views/devocional/devocional-delete/devocional-delete.component';
import { DevocionalReadComponent } from './components/views/devocional/devocional-read/devocional-read.component';
import { DevocionalUpdateComponent } from './components/views/devocional/devocional-update/devocional-update.component';
import { EventosCreateComponent } from './components/views/eventos/eventos-create/eventos-create.component';
import { EventosDeleteComponent } from './components/views/eventos/eventos-delete/eventos-delete.component';
import { EventosReadAllComponent } from './components/views/eventos/eventos-read-all/eventos-read-all.component';
import { EventosUpdateComponent } from './components/views/eventos/eventos-update/eventos-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'devocional',
  component: DevocionalReadComponent
},
{
  path: 'devocional/create',
  component: DevocionalCreateComponent
},
{
  path: 'devocional/delete/:id',
  component: DevocionalDeleteComponent
},
{
  path: 'devocional/update/:id',
  component: DevocionalUpdateComponent
},
{
  path: 'eventos',
  component: EventosReadAllComponent
},
{
  path: 'eventos/create',
  component: EventosCreateComponent
},
{
  path: 'eventos/delete/:id',
  component: EventosDeleteComponent
},
{
  path: 'eventos/update/:id',
  component: EventosUpdateComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
