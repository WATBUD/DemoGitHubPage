import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { SharedModule } from '../shared/shared.module';
import { M_NumpadSelectComponent } from './M_NumpadSelect.component';

@NgModule({
    // imports: [CommonModule, SharedModule, FormsModule],
    imports: [CommonModule, FormsModule],
    declarations: [M_NumpadSelectComponent],
    exports: [M_NumpadSelectComponent],
})
export class M_NumpadSelectModule {
    // public static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: QselectModule,
    //         providers: [],
    //     };
    // }
}
