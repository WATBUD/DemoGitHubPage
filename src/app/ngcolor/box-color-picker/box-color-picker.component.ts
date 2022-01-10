// tslint:disable:component-selector
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ColorOutput } from '../color-output';
import { ColorUtilityService } from '../shared/color-utility/color-utility.service';
import { Hsl } from '../shared/color-utility/hsl';
import { SaturationLightness } from '../shared/hsl/saturation-lightness';

@Component({
    selector: 'ng-color-box, ng-color-basic, ng-color-basic-preview',
    styleUrls: ['./box-color-picker.component.scss'],
    templateUrl: './box-color-picker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BoxColorPickerComponent),
            multi: true,
        },
    ],
})
export class BoxColorPickerComponent implements ControlValueAccessor, OnInit {
    @Input() public startHex: string;
    @Input() public codeNumber: Number;
    public hue: number;
    public resultHue:any;
    public saturationLightness: SaturationLightness;
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: ColorOutput) => void;
    constructor(private colorUtility: ColorUtilityService) {
        this.saturationLightness = {
            saturation: 0,
            lightness: 0,
        };
        this.hue = 0;
        this.onTouchedCallback = () => {};
        this.onChangeCallback = () => {};
    }

    public ngOnInit(): void {
        console.log('%c BoxColor_ngOnInit', 'color:rgb(255,75,255,1)');
    }
    ngAfterViewInit(){
        console.log('%c BoxColor_ngAfterViewInit', 'color:rgb(255,75,255,1)');
        setTimeout(() => {
            const hsl = this.colorUtility.calculateHslFromHex(this.startHex || 'ff0000');
            this.setHsl(hsl);
            this.calculateColor(0);
        }, 50);
    }

    public calculateColor(i): void {
        console.log('%c calculateColor', 'color:rgb(255,75,255,1)');

        const colorOutput = this.colorUtility.createColorOutput(
            this.hue * 360,
            this.saturationLightness.saturation * 100,
            this.saturationLightness.lightness * 100,
        );
        
        if(i == 0){
            this.onChangeCallback(colorOutput);
            this.onTouchedCallback();
        }
    }

    public forceCalculateColor(Hex): void {

        const hsl = this.colorUtility.calculateHslFromHex(Hex || 'ff0000');
        this.setHsl(hsl);
        const colorOutput = this.colorUtility.createColorOutput(
            this.hue * 360,
            this.saturationLightness.saturation * 100,
            this.saturationLightness.lightness * 100,
        );
        console.log('%c forceCalculateColor', 'color:rgb(255,75,255,1)',colorOutput);

        // this.onChangeCallback(colorOutput);
        // this.onTouchedCallback();
        //this.calculateColor(0);
    }



    //當從前方將startHex改變時 同步將畫面的點移到相對的位置
    public ngOnChanges(){ 
        // (rgb(0,0,0,1))
        // if(this.startHex.includes('rgb'))
        //      rgb
        // )
        console.log('%c ngOnChanges', 'color:rgb(255,75,255,1)',this.startHex,this.codeNumber);

        const hsl = this.colorUtility.calculateHslFromHex(this.startHex || 'ff0000');
        console.log('%c hsl', 'color:rgb(255,75,255,1)',hsl);

        this.resultHue = hsl.hue;
        this.setHsl(hsl);
        this.calculateColor(1)
    }




    public writeValue(obj: ColorOutput): void {
        console.log('%c writeValue', 'color:rgb(255,75,255,1)');

        try{
            if (!obj) {
                return;
            }
            const hexValue = obj.hexString || obj.hex.toString();
            if (obj.hsl) {
                this.setHsl({
                    hue: obj.hsl.hue / 360,
                    saturation: obj.hsl.saturation / 100,
                    lightness: obj.hsl.lightness / 100,
                });
            } else if (hexValue) {
                // if hsl cant be found, then try calculate it
                const hsl = this.colorUtility.calculateHslFromHex(hexValue);
                this.setHsl(hsl);
            } else if (obj.rgb) {
                const hsl = this.colorUtility.calculateHslFromRgb(obj.rgb);
                this.setHsl(hsl);
            }
        }catch(e){
            
        }
    }
    public registerOnChange(fn: (_: ColorOutput) => void): void {
        this.onChangeCallback = fn;
    }
    public registerOnTouched(fn: () => void): void {
        this.onTouchedCallback = fn;
    }

    private setHsl(hsl: Hsl): void {
        this.hue = hsl.hue;
        this.saturationLightness = {
            saturation: hsl.saturation,
            lightness: hsl.lightness,
        };
    }
}
