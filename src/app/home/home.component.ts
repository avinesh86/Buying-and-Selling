import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from '../admin/adminShared/user.service';
import { Classified } from '../admin/adminShared/classified';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']    
})
export class HomeComponent implements OnInit {
    classifiedPosts: Classified[];

    constructor( private userSVC: UserService, private router: Router ){} 

    ngOnInit(){
        this.getPosts();
    }

    getPosts(){
        let dbRef = firebase.database().ref('classifiedPosts/')
        dbRef.once('value')
            .then((snapshot)=> {
                let tmp: string[] = snapshot.val();
                this.classifiedPosts = Object.keys(tmp).map(key => tmp[key])
            });
    }

    choosePost(clas: Classified) {
        this.router.navigate(['/classified', clas.id]);
    }   

}
