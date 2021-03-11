import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CropComponent } from './crop/crop.component';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'crop', component: CropComponent},
  {path: 'fertilizer', component: FertilizerComponent},
  {path: 'diseases', component: DiseasesComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
