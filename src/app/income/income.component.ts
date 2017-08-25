import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from '../admin/adminShared/user.service';
import { Income } from '../admin/adminShared/income';

@Component({
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
    incomes: Income[];

    constructor( private userSVC: UserService, private router: Router ){} 

    ngOnInit(){
        this.getIncomes();
    }

    getIncomes(){
        let dbRef = firebase.database().ref('incomes/')
        dbRef.once('value')
            .then((snapshot)=> {
                let tmp: string[] = snapshot.val();
                this.incomes = Object.keys(tmp).map(key => tmp[key])
            });
    }

    chooseIncome(income: Income) {
        this.router.navigate(['/incomes', income.id]);
    }   

}
