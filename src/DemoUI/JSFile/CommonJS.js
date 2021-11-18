// JScript 檔
// 金額數據格式處理

/**
 * 加上逗號
 *
 * @param num 
 * return 正確數字
 */
function GetValue(num)
{
    var numBak = num;
    
    if(num=="")
        return "";

    num=Number(num);

    if(isNaN(num))  
        return numBak;
            
    num=num+"";
    
    var arrayNum = numBak.split('.');
      
    var returnNum=arrayNum[0];
      
    var re=/(-?\d+)(\d{3})/;
    while(re.test(returnNum))
    {       
        returnNum=returnNum.replace(re,"$1,$2")       
    }

    if(arrayNum.length==2)
    {   
        returnNum+="."+arrayNum[1];  
    }else
    {
        returnNum+=".00";
    }
    
    return returnNum;
}   

/**
 * 加上逗號
 *
 * @param num 
 * return 正確數字
 */
function GetIntValue(num)
{
    var numBak = num;
    
    if(num=="")
        return "";
        
    num=Number(num);
    
    if(isNaN(num))  
        return numBak;
            
    num=num+"";
    
    var index = num.indexOf(".")
    if (index>0)
        return numBak;
    
    var returnNum=num;
      
    var re=/(-?\d+)(\d{3})/;
    while(re.test(returnNum))
    {       
        returnNum=returnNum.replace(re,"$1,$2")       
    }
        
    return returnNum;
}   

/**
 * 去掉逗號
 *
 * @param obj 
 */
function DelDouhao(obj)
{
    obj.value=obj.value.replace(/,/g,'');
    obj.select();
}
