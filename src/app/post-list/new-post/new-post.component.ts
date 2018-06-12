import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../../services/postsService';
import { Post } from '../../models/Post.model';

@Component({
	selector: 'app-post-form',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

	// Formulaire par méthode réactive
	postForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private postsService: PostsService,
		private router: Router
	) { }

	ngOnInit() {
		this.initForm();
	}

	// Initialisation du formulaire
	initForm() {
		// Champs title et content requis
		this.postForm = this.formBuilder.group({
			title: ["", Validators.required],
			content: ["", Validators.required]
		});
	}

	// Création et sauvegarde d'un nouvel article
	onSavePost(post: Post) {
		// Création d'un objet Post à partir des entrées du formulaire
		const title = this.postForm.get('title').value;
		const content = this.postForm.get('content').value;
		const loveIts = 0;
		const created_at = Date.now();
		const newPost = new Post(title, content, loveIts, created_at);

		this.postsService.createNewPost(newPost);
		this.router.navigate(["/books"]);
	}

}
