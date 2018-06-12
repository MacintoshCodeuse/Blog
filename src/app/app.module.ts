import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { postsService } from './services/postsService';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		PostListComponent,
		PostListItemComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AngularFontAwesomeModule
	],
	providers: [
		postsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
