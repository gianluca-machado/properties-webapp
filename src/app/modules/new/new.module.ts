import { NgModule } from '@angular/core';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NewComponent,
  ],
  imports: [
    SharedModule,
    NewRoutingModule,
  ],
})
export class NewModule { }
