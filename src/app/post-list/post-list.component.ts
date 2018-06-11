import { Component, OnInit, Input } from '@angular/core';
import { postsService } from '../services/postsService';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	posts: any[] = [];
	postsSubscription : Subscription;

	constructor(private postsService: postsService) {
	}


	ngOnInit() {
		this.postsSubscription = this.postsService.postsSubject.subscribe(
			(posts: any[]) => {
				this.posts = posts;
			}
		);
		this.postsService.emitPosts();
	}

}
