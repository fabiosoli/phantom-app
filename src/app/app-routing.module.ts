import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'bookmark-list', component: BookmarkListComponent}
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BookmarkListComponent];