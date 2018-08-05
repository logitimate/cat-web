import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatListComponent} from './cat-list/cat-list.component';
import {NewCatComponent} from './new-cat/new-cat.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: CatListComponent
  },
  {
    path: 'new',
    children: [],
    component: NewCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
