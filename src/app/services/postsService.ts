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

	constructor() { }

	// Emission des articles
	emitPosts() {
		this.postsSubject.next(this.posts);
	}

	// Récupération de l'index d'un article
	private postIndex(post: Post) {
		const postIndex = this.posts.findIndex(postEl => {
			if (postEl["id"] === post["id"]) {
				return true;
			}
		});
		return postIndex;
	}

	// Ajout d'un loveIts dans un article
	love(post: Post) {
		// Récupération de l'index de l'article
		const postIndexToUpdate = this.postIndex(post);
		// Ajout d'un loveIts à l'article
		++this.posts[postIndexToUpdate]["loveIts"];
		// Sauvegarder le tableau des articles dans la base de données
		this.savePosts();
		// Emission des articles
		this.emitPosts();
	}

	// Supression d'un loveIts dans un article
	dontLove(post: Post) {
		// Récupération de l'index de l'article
		const postIndexToUpdate = this.postIndex(post);
		// Supression d'un loveIts à l'article
		--this.posts[postIndexToUpdate]["loveIts"];
		// Sauvegarder le tableau des articles dans la base de données
		this.savePosts();
		// Emission des articles
		this.emitPosts();
	}

	// Création d'un objet Post
	initPost(post: Post) {
		const id = post["id"];
		const title = post["title"];
		const content = post["content"];
		const loveIts = post["loveIts"];
		const created_at = post["created_at"];
		const initPost = new Post(id, title, content, loveIts, created_at);
		return initPost;
	}

	// Sauvegarder le tableau des articles dans la base de données
	savePosts() {
		firebase.database().ref('/posts').set(this.posts);
	}

	// Création d'un nouvel article
	createNewPost(newPost: Post) {
		// Récupération de l'index de l'article
		newPost["id"] = this.posts.length + 1;
		// Ajout de l'article au tableau des articles
		this.posts.push(newPost);
		// Sauvegarder le tableau des articles dans la base de données
		this.savePosts();
		// Emission des articles
		this.emitPosts();
	}

	// Récupérer la liste des articles
	getPosts() {
		firebase.database().ref('/posts')
			.on('value', (data: DataSnapshot) => {
				this.posts = data.val() ? data.val() : [];
				this.emitPosts();
			});
	}

	// Supression d'un article
	removePost(post: Post) {
		// Récupération de l'index de l'article
		const postIndexToRemove = this.postIndex(post);
		// Supression de l'article au tableau des articles
		this.posts.splice(postIndexToRemove, 1);
		// Sauvegarder le tableau des articles dans la base de données
		this.savePosts();
		// Emission des articles
		this.emitPosts();
	}
}
