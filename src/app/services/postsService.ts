import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "../models/Post.model";
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {
	// Création d'un tableau d'articles
	private posts: Post[] = [];

	// Création d'un subject pour l'émission des articles
	public postsSubject = new Subject<any[]>();

	constructor() {}

	// Emission des articles
	emitPosts() {
		this.postsSubject.next(this.posts);
	}

	// Ajout d'un loveIts dans un article
	love(index: number) {
		// Ajout d'un loveIts à l'article
		++this.posts[index]["loveIts"];
		// Sauvegarder le tableau des articles dans la base de données
		this.savePosts();
		// Emission des articles
		this.emitPosts();
	}

	// Supression d'un loveIts dans un article
	dontLove(index: number) {
		// Supression d'un loveIts à l'article
		--this.posts[index]["loveIts"];
		// Sauvegarder le tableau des articles dans la base de données
		this.savePosts();
		// Emission des articles
		this.emitPosts();
	}

	// Sauvegarder le tableau des articles dans la base de données
	savePosts() {
		firebase.database()
			.ref("/posts")
			.set(this.posts);
	}

	// Création d'un nouvel article
	createNewPost(newPost: Post) {
		// Ajout de l'article au tableau des articles
		this.posts.push(newPost);
		// Sauvegarder le tableau des articles dans la base de données
		this.savePosts();
		// Emission des articles
		this.emitPosts();
	}

	// Récupérer la liste des articles
	getPosts() {
		firebase
			.database()
			.ref("/posts")
			.on("value", (data: DataSnapshot) => {
				this.posts = data.val() ? data.val() : [];
				this.emitPosts();
			});
	}

	// Supression d'un article
	removePost(index: number) {
		this.posts.splice(index, 1);
		// Sauvegarder le tableau des articles dans la base de données
		this.savePosts();
		// Emission des articles
		this.emitPosts();
	}
}
