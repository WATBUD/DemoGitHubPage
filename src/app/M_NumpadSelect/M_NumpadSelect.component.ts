import { Component ,OnInit ,Output,Input ,EventEmitter, SimpleChange, OnChanges, ViewEncapsulation, forwardRef,
ChangeDetectorRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
    selector: 'app-M_NumpadSelect',
    templateUrl : './M_NumpadSelect.component.html',
    styleUrls: ['./M_NumpadSelect.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => M_NumpadSelectComponent),
            multi: true,
        },
    ],
    encapsulation: ViewEncapsulation.None
})
export class M_NumpadSelectComponent implements OnInit,ControlValueAccessor{
    @Input()
    inputoption:any;
    @Input()
    i18nManager:any;
    @Input()
    componentId:any;
    refreshflag:any=0;
    a:any;
    b:any;
    c:any;
    //public nowSelectedData:any;
    selectedIndex=0;
    public selectdata:any;
    selectedDataList:any=[];
    nowSelectedDataIndex:any=0;
    nowMouseoverDataIndex=9999;
    showCommonSelecListUI=false;
    AppsettingData:any;
    closeAllSelectEvent:any;
    translatesubscribe:any;
    // students:string[]=['xiaoming','xiaohong','xiaohei'];
    // student:string='xiaoming';
    private onChangeCallback: (_: any) => void;
    private onTouchedCallback: () => void;

    constructor(private cdr: ChangeDetectorRef,
        ){
        this.onTouchedCallback = () => {};
        this.onChangeCallback = () => {};
    }
    showEvent;
    ngOnInit(){
        console.log('M_NumpadSelectComponent_ngOnInit',this.inputoption,this.componentId)
        try {
        } catch(e) {
            console.log(e)
        }
        this.showEvent=((e) => {
            if (e.target.dataset.identity==undefined) {
                this.showCommonSelecListUI = false;
            }
        });
        document.addEventListener('click', this.showEvent);
        
    }

    getSelectedDataName(index) {
        var target = this.inputoption[index];
        if(target===undefined){
            console.log('%c getSelectedDataName', 'color:red', target);
        }

        if (target.hasOwnProperty('translate')) {
            return this.getTranslate(target.translate);
        }
        else {
            return target.name;
        }

    }
    getTranslate(SearchName) {
        //console.log('getTranslate',this.translate.get(SearchName)['value']);
        var translate=this.i18nManager.getTarget(SearchName);
        //this.translate.get(SearchName)['value'];
        if(translate!=undefined){
            //console.log('%c getTranslate','color:red', SearchName);
            return translate;
        }
        else{
            console.log('%c getTranslate_miss','color:red', SearchName);
        }
    }
    getSelectNowData() {
        if (this.inputoption != null && this.inputoption != undefined) {
            let target = this.inputoption.find((x) => x.value == this.nowSelectedDataIndex)
            if (target != undefined) {
                //console.log('%c getSelectNowData', 'color:red', target);
                if (target.hasOwnProperty('translate')) {
                    return this.getTranslate(target.translate);
                }
                else {
                    return target.name;
                }
            }
        }
    }
    ngAfterViewInit(){
        //this.selectedDataList=this.inputoption;
        //this.student=this.students[1];
        //this.T1Select=this.T1array[1].value;
        try {
            this.nowSelectedDataIndex=this.inputoption[0].value;
        } catch (error) {

          console.log('inputoption_error',this.inputoption,'error',error);
        }

    }

    setNowSelectedDataIndex(value){
        //console.log('setNowSelectedDataIndex',value);
        this.nowSelectedDataIndex=value;
        this.showCommonSelecListUI=!this.showCommonSelecListUI;
        this.cdr.detectChanges();
        this.onChangeCallbackParent();
        //console.log('setNowSelectedDataIndex',this.showCommonSelecListUI);
    }

    
    setNowMouseoverDataIndex(value){
        //console.log('setNowMouseoverDataIndex',value);
        this.nowMouseoverDataIndex=value;
        this.cdr.detectChanges();

    }


    ngOnChanges(){
        // setTimeout(()=>{
        //     this.Reinit();
        // })
    }
    ngOnDestroy() {
        // document.removeEventListener("click", this.closeAllSelectEvent);
        // this.translatesubscribe.unsubscribe();
    }
    Reinit(){
        // if(this.tampinput!=this.inputoption && this.refreshflag!=0){
        try{
          
        }catch(e){
            console.log('commonselectComponent',e)
            this.Reinit();
        }
    }
    closeAllSelect(elmnt) {
    }


    public onChangeCallbackParent():void {
        let target = this.inputoption.find((x) => x.value == this.nowSelectedDataIndex)
        if(target!=undefined){
            this.onChangeCallback(target);
            this.onTouchedCallback();
        }

    }

    public writeValue(obj: any): void {
        //console.log('writeValue',obj)
        if(obj != null && obj != undefined){
            this.nowSelectedDataIndex=obj.value;
            //console.log('writeValue_nowSelectedData', this.nowSelectedDataIndex)
            //console.log('%c writeValue_inputoption', 'color:red', this.inputoption);
        }
    }
    public registerOnChange(fn: any): void {
        // throw new Error("Method not implemented.");
        this.onChangeCallback = fn;
    }
    public registerOnTouched(fn: any): void {
        // throw new Error("Method not implemented.");
        this.onTouchedCallback = fn;
    }
}