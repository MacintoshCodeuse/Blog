import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class postsService {

	// Création d'un tableau d'articles
	private posts: any[] = [
		{
			title: 'Mon premier post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit nec mauris ut maximus. Maecenas ut enim accumsan, feugiat quam in, volutpat enim. Integer est orci, vehicula ut justo ac, ullamcorper molestie purus. Ut vestibulum nisl mi, in venenatis ante gravida vitae. Ut laoreet euismod facilisis. Mauris dapibus mauris eget mi fringilla, sed tempor nulla convallis. Sed in consectetur tellus. Fusce vitae posuere turpis. Nunc elementum malesuada porta. Duis lacus mauris, laoreet eget ligula at, posuere pretium erat. Phasellus lobortis sodales varius. Etiam at maximus elit. Sed ac ante vel ante mollis tristique. Sed dui dui, iaculis et fringilla sed, hendrerit vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
			loveIts: '5',
			created_at: new Date()
		},
		{
			title: 'Mon deuxieme post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit nec mauris ut maximus. Maecenas ut enim accumsan, feugiat quam in, volutpat enim. Integer est orci, vehicula ut justo ac, ullamcorper molestie purus. Ut vestibulum nisl mi, in venenatis ante gravida vitae. Ut laoreet euismod facilisis. Mauris dapibus mauris eget mi fringilla, sed tempor nulla convallis. Sed in consectetur tellus. Fusce vitae posuere turpis. Nunc elementum malesuada porta. Duis lacus mauris, laoreet eget ligula at, posuere pretium erat. Phasellus lobortis sodales varius. Etiam at maximus elit. Sed ac ante vel ante mollis tristique. Sed dui dui, iaculis et fringilla sed, hendrerit vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
			loveIts: '0',
			created_at: new Date()
		},
		{
			title: 'Mon troisième post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit nec mauris ut maximus. Maecenas ut enim accumsan, feugiat quam in, volutpat enim. Integer est orci, vehicula ut justo ac, ullamcorper molestie purus. Ut vestibulum nisl mi, in venenatis ante gravida vitae. Ut laoreet euismod facilisis. Mauris dapibus mauris eget mi fringilla, sed tempor nulla convallis. Sed in consectetur tellus. Fusce vitae posuere turpis. Nunc elementum malesuada porta. Duis lacus mauris, laoreet eget ligula at, posuere pretium erat. Phasellus lobortis sodales varius. Etiam at maximus elit. Sed ac ante vel ante mollis tristique. Sed dui dui, iaculis et fringilla sed, hendrerit vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
			loveIts: '-5',
			created_at: new Date()
		}
	]

	public postsSubject  = new Subject<any[]>();

	constructor() {

	}

	emitPosts() {
		this.postsSubject.next(this.posts);
	}


}
