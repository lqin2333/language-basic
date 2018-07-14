import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lesson4Component } from './lesson4/lesson4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'lesson4', pathMatch: 'full' },
  { path: 'lesson3', component: Lesson3Component },
  {
    path: 'lesson3/:id',
    component: RecordDetailComponent,
  },
  { path: 'lesson4', component: Lesson4Component },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [
    Lesson3Component,
    RecordDetailComponent,
    Lesson4Component,
    PageNotFoundComponent
  ],


})
export class AppRoutingModule { }
export const routingComponents = [
  Lesson3Component,
  Lesson4Component,
  PageNotFoundComponent
];
