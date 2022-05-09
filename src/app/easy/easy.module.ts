import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { EasyComponent } from "./easy.component";
import { Number1Component } from "./number/number1/number1.component";
import { Number2Component } from "./number/number2/number2.component";
import { N31Component } from "./number/number3/n31/n31.component";
import { N32Component } from "./number/number3/n32/n32.component";
import { N33Component } from "./number/number3/n33/n33.component";
import { N34Component } from "./number/number3/n34/n34.component";
import { N35Component } from "./number/number3/n35/n35.component";
import { N36Component } from "./number/number3/n36/n36.component";
import { Number3Component } from "./number/number3/number3.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EasyComponent,
    Number1Component,
    Number2Component,
    Number3Component,
    N31Component,
    N32Component,
    N33Component,
    N34Component,
    N35Component,
    N36Component,
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    EasyComponent,
    Number1Component,
    Number2Component,
    Number3Component,
    N31Component,
    N32Component,
    N33Component,
    N34Component,
    N35Component,
    N36Component,
  ]
})
export class EasyModule {}
