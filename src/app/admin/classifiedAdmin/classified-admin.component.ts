import { Component, OnInit } from '@angular/core';
import {UserService} from '../adminShared/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ClassifiedAdminService } from '../adminShared/classified-admin.service';
import { Classified } from '../adminShared/classified';

@Component({
  templateUrl: './classified-admin.component.html',
  styleUrls: ['./classified-admin.component.css']
})

export class ClassifiedAdminComponent implements OnInit {
    theUser: string;
    menuChoice: string;
    classifiedPosts: Classified[];
    formDisplay: boolean = true;
    singleClassified: Classified;

    constructor( 
        private userSVC: UserService, 
        private router: Router, 
        private classifiedAdminSVC: ClassifiedAdminService
    ){}

    logout(){
        this.userSVC.logout();
        this.router.navigate(['']);
    }

    chooseMode(mode: string){
        this.menuChoice = mode;
    }

    ngOnInit(){
        this.theUser = this.userSVC.loggedInUser;
        this.getClassifieds();
    }

    getClassifieds(){
        let dbRef = firebase.database().ref('classifiedPosts/');
        dbRef.once('value')
            .then((snapshot)=> {
                let tmp: string[] = snapshot.val();
                this.classifiedPosts = Object.keys(tmp).map(key => tmp[key])
            });
    }

    editClassified(theClassified: Classified){
        this.singleClassified = theClassified;
        this.formDisplay = false;
    }

    cancelEdit(){
        this.formDisplay = true;
    }

    updatePost(single: Classified){
        this.classifiedAdminSVC.editPost(single);
        this.formDisplay = true;
    }

    deleteClassified(single: Classified){
        let verify = confirm(`Are you sure you want to delete this classified?`)
        if (verify == true) {
            this.classifiedAdminSVC.removePost(single);
            this.router.navigate(['/admin/']);
        } else {
            alert('Nothing deleted!');
        }
    }


     
}