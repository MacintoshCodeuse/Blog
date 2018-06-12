import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../../models/Post.model";
import { PostsService } from "../../services/postsService";

@Component({
	selector: "app-post-list-item",
	templateUrl: "./post-list-item.component.html",
	styleUrls: ["./post-list-item.component.css"]
})

// Article
export class PostListItemComponent implements OnInit {
	@Input() post: Post;

	constructor(private postService: PostsService) { }

	ngOnInit() { }

	// Ajout d'un loveIts dans un article
	onLove() {
		// Création d'un objet Post
		const post = this.postService.initPost(this.post);
		// Utilisation de la fonction love de postService
		this.postService.love(post);
	}

	// Supression d'un loveIts dans un article
	onDontLove() {
		// Création d'un objet Post
		const post = this.postService.initPost(this.post);
		// Utilisation de la fonction dontLove de postService
		this.postService.dontLove(post);
	}

	// Supression d'un article
	onDelete() {
		// Création d'un objet Post
		const post = this.postService.initPost(this.post);
		// Utilisation de la fonction removePoste de postService
		this.postService.removePost(post);
	}
}
