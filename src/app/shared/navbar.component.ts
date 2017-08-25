import { Component } from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `
                <div class="top-bar">
                    <div class="top-bar-title">Buying and Selling Company</div>
                    <div>
                        <ul class="menu">
                            <li class="nav-menu"><a [routerLink]="['/income']">Income</a></li>
                            <li class="nav-menu"><a [routerLink]="['/cart']">Cart</a></li>
                            <li class="nav-menu"><a [routerLink]="['/shop']">Shop</a></li>
                            <li class="nav-menu"><a [routerLink]="['/admin']">Admin Area</a></li>
                        </ul>
                    </div>
                </div>
    `,
    styleUrls: ['./navbar.component.css']
})
export class NavComponent {}