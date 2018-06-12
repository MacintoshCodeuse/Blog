import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/postsService';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})

// Liste des articles
export class PostListComponent implements OnInit {

	// Tableau d'articles
	posts: Post[];
	// Subscription pour l'émission des articles
	postsSubscription : Subscription;

	constructor(private postsService: PostsService) {
	}

	ngOnInit() {

		// Emission des articles via une subscription
		this.postsSubscription = this.postsService.postsSubject.subscribe(
			(posts: Post[]) => {
				this.posts = posts;
			}
		);
		this.postsService.getPosts();
		this.postsService.emitPosts();
	}

	ngOnDestroy() {
		this.postsSubscription.unsubscribe();
	}

}
