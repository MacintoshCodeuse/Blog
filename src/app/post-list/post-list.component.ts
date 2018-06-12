import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/postsService';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	posts: Post[];
	postsSubscription : Subscription;

	constructor(private postsService: PostsService) {
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
