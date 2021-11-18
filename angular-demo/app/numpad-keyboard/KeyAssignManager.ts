/**-----------------------------------------------------------------------------------------
 * Author:G-SPY Louis
 * KeyAssignManager:KeyAssignManager Class
 * Processing KeyAssignStatus
-----------------------------------------------------------------------------------------*/
export class KeyAssignManager {
    ApplicationPath: any
    WebsitePath: any
    Shift: any
    Ctrl: any
    Alt: any
    hasFNStatus:any;
    Windows: any
    macro_Data;
    assignValue='';
    macro_RepeatType=0;
    combinationkeyEnable = false;
    shortcutsWindowsEnable=false;
    sensitivity=0;
    d_SoundVolume={

    }
    recordBindCodeName = "";
    recordBindCodeType = "";
    //ROTARY ENCODER
    /**
       @param CodeName string:recordBindCodeName
       @param CodeNameType string:recordBindCodeType
       * CodeNameType list
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

    /**
    * resetDefaultVariable
    */
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
        this.hasFNStatus = false;
    }

    /**
     * click Shortcut type
     * @param nameType string:ShortCut Type
     * 1. Launch Program
     * 2. Launch Website
     * 3. Windows
     */
    setShortCut(nameType) {
        if (nameType == "LaunchProgram") {
            this.WebsitePath = ""
        } else if (nameType == "LaunchWebsite") {
            this.ApplicationPath = ""
        } else {
            this.ApplicationPath = ""
            this.WebsitePath = ""
        }
    }

    /**
     * set Combination key
     */
    setCombinationKeyEnable() {
        if (!this.combinationkeyEnable) {
            this.Shift = false;
            this.Alt = false;
            this.Ctrl = false;
            this.Windows = false;
            this.hasFNStatus = false;
        }
    }

    /**
    * updateVariable
    *@param TData Obj:KeyAssignManager Data
    */
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
