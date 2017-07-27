import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RattingComponent } from './ratting/ratting.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations : [
        InputComponent,
        RadioComponent,
        RattingComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RattingComponent,
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule
    ]
})
export class SharedModule{

}