import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { ClassifiedDetailComponent } from '../classifiedDetail/classified-detail.component';
import { ShopComponent }  from '../shop/shop.component';
import { ProductDetailComponent }  from '../productDetail/product-detail.component';
import { CartComponent } from '../cart/cart.component';


import { IncomeComponent }  from '../income/income.component';
import { IncomeDetailComponent }  from '../incomeDetail/income-detail.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'income', component: IncomeComponent },
            { path: 'income/:id', component: IncomeDetailComponent },
            { path: 'cart', component: CartComponent },
            { path: 'product/:id', component: ProductDetailComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'classified/:id', component: ClassifiedDetailComponent },
            { path: '' , component: HomeComponent},
            { path: '**' , component: ErrorComponent }
        ])    
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        IncomeDetailComponent,
        ClassifiedDetailComponent,
        ProductDetailComponent
    ]
}) 
export class AppRoutingModule {}

