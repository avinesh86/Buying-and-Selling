import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Income } from '../admin/adminShared/income';


@Component({
    templateUrl: './income-detail.component.html',
    styleUrls: ['./income-detail.component.css']
 })

 export class IncomeDetailComponent implements OnInit {
    singleIncome: Income;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(){
        let incomeId = this.route.snapshot.params['id'];
        this.getIncome(incomeId);
    }

    getIncome(id: string){
        let dbRef = firebase.database().ref('incomes');
        dbRef.orderByChild('id')
            .equalTo(id)
            .once('value')
            .then((snapshot)=>{
                let tmp = snapshot.val();
                let transform = Object.keys(tmp).map(key => tmp[key]);
                let date = transform[0].date;
                let desc = transform[0].description;
                let weight = transform[0].weight;
                let itemValue = transform[0].itemValue;
                let id = transform[0].id;
                this.singleIncome = new Income (date,desc,weight,itemValue,id);
            });  
    };

    addIncome(id:string, date: string, itemValue:number){

    }


 }