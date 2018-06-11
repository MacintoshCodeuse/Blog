import { Component, OnInit, Input } from '@angular/core';
import { postsService } from '../services/postsService';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	posts: any[] = [];

	constructor(private postsService: postsService) {
		this.posts = this.postsService.posts;
	}

	ngOnInit() {
	}

}
