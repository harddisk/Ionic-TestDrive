import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { RegisterPage } from '../tabRegister/register';
import { VeloOutPage } from '../tabVeloOut/veloout';
import { VeloInPage } from '../tabVeloIn/veloin';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = RegisterPage;
    tab2Root: any = VeloOutPage;
    tab3Root: any = VeloInPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {

        });
    }
}
