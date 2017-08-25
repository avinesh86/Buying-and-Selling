import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { ClassifiedDetailComponent } from '../classifiedDetail/classified-detail.component';
import { ShopComponent }  from '../shop/shop.component';
import { ProductDetailComponent }  from '../productDetail/product-detail.component';
import { CartComponent } from '../cart/cart.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
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
        ClassifiedDetailComponent,
        ProductDetailComponent
    ]
}) 
export class AppRoutingModule {}

