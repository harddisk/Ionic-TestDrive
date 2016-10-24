import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { RegisterPage } from '../pages/tabRegister/register';
import { VeloOutPage } from '../pages/tabVeloOut/veloout';
import { VeloInPage } from '../pages/tabVeloIn/veloin';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    VeloOutPage,
    VeloInPage,
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    VeloOutPage,
    VeloInPage,
    TabsPage,
  ],
  providers: []
})
export class AppModule {}
