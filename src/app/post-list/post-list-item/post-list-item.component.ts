import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post.model';
import { postsService } from '../../services/postsService';

@Component({
	selector: "app-post-list-item",
	templateUrl: "./post-list-item.component.html",
	styleUrls: ["./post-list-item.component.css"]
})
export class PostListItemComponent implements OnInit {

	@Input() post: Post[];

	constructor(private postService: postsService) {}

	ngOnInit() {
	}

	onLove() {
		const id = this.post['id'];
		const title = this.post['title'];
		const content = this.post['content'];
		const loveIts = this.post['loveIts'] + 1;
		const created_at = this.post['created_at'];
		const post = new Post(id, title, content, loveIts, created_at);
		this.postService.love(post);
	}

	onDontLove() {
		const id = this.post['id'];
		const title = this.post['title'];
		const content = this.post['content'];
		const loveIts = this.post['loveIts'] + 1;
		const created_at = this.post['created_at'];
		const post = new Post(id, title, content, loveIts, created_at);
		this.postService.dontLove(post);
	}
}
