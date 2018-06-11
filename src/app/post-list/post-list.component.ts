import { Component, OnInit, Input } from '@angular/core';
import { postsService } from '../services/postsService';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	posts: Post[];
	postsSubscription : Subscription;

	constructor(private postsService: postsService) {
	}


	ngOnInit() {
		this.postsSubscription = this.postsService.postsSubject.subscribe(
			(posts: Post[]) => {
				this.posts = posts;
			}
		);
		this.postsService.emitPosts();
	}

}
