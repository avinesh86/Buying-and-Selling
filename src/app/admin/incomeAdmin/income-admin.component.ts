import { Component, OnInit } from '@angular/core';
import {UserService} from '../adminShared/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { IncomeAdminService } from '../adminShared/income-admin.service';
import { Income } from '../adminShared/income';

@Component({
  templateUrl: './income-admin.component.html',
  styleUrls: ['./income-admin.component.css']
})

export class IncomeAdminComponent implements OnInit {
    theUser: string;
    menuChoice: string;
    theIncomes: Income[];
    formDisplay: boolean = true;
    singleIncome: Income;

    constructor( 
        private userSVC: UserService, 
        private router: Router, 
        private incomeAdminSVC: IncomeAdminService
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
        this.getIncomes();
    }

    getIncomes(){
        let dbRef = firebase.database().ref('incomes/');
        dbRef.once('value')
            .then((snapshot)=> {
                let tmp: string[] = snapshot.val();
                this.theIncomes = Object.keys(tmp).map(key => tmp[key])
            });
    }

    editIncome(theIncome: Income){
        this.singleIncome = theIncome;
        this.formDisplay = false;
    }

    cancelEdit(){
        this.formDisplay = true;
    }

    updateIncome(singleIncome: Income){
        this.incomeAdminSVC.editIncome(singleIncome);
        this.formDisplay = true;
    }

    deleteIncome(oneIncome: Income){
        let verify = confirm(`Are you sure you want to delete this income?`)
        if (verify == true) {
            this.incomeAdminSVC.removeIncome(oneIncome);
            this.router.navigate(['/admin/']);
        } else {
            alert('Nothing deleted!');
        }
    }


     
}