import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ForumComponent } from './forum.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ForumComponent }
    ]
  }
];

export const ForumRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
