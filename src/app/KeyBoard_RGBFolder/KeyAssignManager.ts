export class KeyAssignManager {
    ApplicationPath: any
    WebsitePath: any
    Shift: any
    Ctrl: any
    Alt: any
    Windows: any
    macro_Data;
    assignValue='';
    macro_RepeatType=0;
    combinationkey: any = 0
    combinationkeyEnable = false;
    shortcutsWindowsEnable=false;
    recordBindCodeName = "";
    recordBindCodeType = "";
    /**
       * CodeNameType list
       * @flag
       * KEYBOARD
       * MOUSE
       * Multimedia
       * SingleKey
       * MacroFunction
       * Shortcuts
       * DISABLE
       * LaunchProgram
       * LaunchWebsite
       */
    setNowCodeName(CodeName, CodeNameType) {
        this.recordBindCodeName = CodeName;
        this.recordBindCodeType = CodeNameType;
        if (CodeNameType = "Shortcuts") {
            this.setShortCut(CodeNameType);
        }
    }
    resetDefaultVariable() {
        this.recordBindCodeType = "";
        this.recordBindCodeName = "";
        this.WebsitePath = "";
        this.ApplicationPath = "";
        this.combinationkeyEnable = false;
        this.shortcutsWindowsEnable=false;
        this.Shift = false;
        this.Ctrl = false;
        this.Alt = false;
        this.Windows = false;
    }

    /**
     * click Shortcut type
     * @flag
     * 1. Launch Program
     * 2. Launch Website
     * 3. Windows
     */
    setShortCut(nameType) {
        if (nameType == "LaunchProgram") {
            this.WebsitePath = undefined
        } else if (nameType == "LaunchWebsite") {
            this.ApplicationPath = undefined
        } else {
            this.ApplicationPath = undefined
            this.WebsitePath = undefined
        }
    }

    /**
     * set Modify key
     */
    setCombinationKeyEnable() {
        if (!this.combinationkeyEnable) {
            this.Shift = false
            this.Alt = false
            this.Ctrl = false
            this.Windows = false
        }
    }

    updateVariable(TData){
        //var target=this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey();
        var arr = Object.keys(TData);
        for (let index = 0; index < arr.length; index++) {

            if(this[arr[index]]!=undefined)
            {
                this[arr[index]]=TData[arr[index]];
            }
        }
    }


}
