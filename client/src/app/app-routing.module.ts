import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { ZooComponent } from './components/zoo/zoo.component';

const routes: Routes = [
  { path: '', redirectTo: 'animal', pathMatch: 'full' },
  { path: 'animal', component: AnimalComponent },
  { path: 'zoo', component: ZooComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
