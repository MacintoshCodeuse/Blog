import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsService } from './services/postsService';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './post-list/new-post/new-post.component';

const appRoutes: Routes = [
	{ path: 'posts', component: PostListComponent },
	{ path: 'posts/new', component: NewPostComponent },
	{ path: '', redirectTo: 'posts', pathMatch: 'full' },
	{ path: '**', redirectTo: 'posts' }
];

@NgModule({
	declarations: [
		AppComponent,
		PostListComponent,
		PostListItemComponent,
		HeaderComponent,
		NewPostComponent
	],
	imports: [
		BrowserModule,
		AngularFontAwesomeModule,
		RouterModule,
		RouterModule.forRoot(appRoutes),
		ReactiveFormsModule
	],
	providers: [
		PostsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
