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
	@Input() i: string;

	constructor(private postService: PostsService) {}

	ngOnInit() {}

	// Ajout d'un loveIts dans un article
	onLove(index: number) {
		// Utilisation de la fonction love de postService
		this.postService.love(index);
	}

	// Supression d'un loveIts dans un article
	onDontLove(index: number) {
		// Utilisation de la fonction dontLove de postService
		this.postService.dontLove(index);
	}

	// Supression d'un article
	onDelete(index: number) {
		// Utilisation de la fonction removePoste de postService
		this.postService.removePost(index);
	}
}
