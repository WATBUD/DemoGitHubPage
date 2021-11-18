/*********************本期***************************************/
//日
function getCurrentDay(length,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),getdate(),112) ";
}
//周
//獲取本周的第一天
function getCurrentWeekFirst(length,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,getdate()),-"+7+"-1),112) ";
}
//獲取本周的最後一天
function getCurrentWeekLast(length,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,getdate()),-0),112) ";
}
//月
//獲取當前月的第一天
function getCurrentMonthFirst(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(tablename == null)tablename = "";
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        if(tablename.toUpperCase().indexOf("JCIC") == -1){
            datetmp = "dateadd(month,-1,getdate())";
        }else{
           datetmp = "dateadd(month,-1,dateadd(day,-17,getdate()))";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
        }
    }
    return "convert(char("+length+"),DATEADD(month, DATEDIFF(month, 0, "+datetmp+"), 0),112)";
}
//獲取當前月的最後一天
function getCurrentMonthLast(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(tablename == null)tablename = "";
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        if(tablename.toUpperCase().indexOf("JCIC") == -1){
            datetmp = "dateadd(month,-1,getdate())";
        }else{
           datetmp = "dateadd(month,-1,dateadd(day,-17,getdate()))";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
        }
    }
    return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,1, "+datetmp+")),0)),112)";
}
//月
//獲取當前月的第一天
function getCurrentMonthFirst4JCIC(length,field){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        datetmp = "dateadd(month,-1,getdate())";
    }
    return "convert(char("+length+"),DATEADD(month, DATEDIFF(month, 0, "+datetmp+"), 0),112)";
}
//獲取當前月的最後一天
function getCurrentMonthLast4JCIC(length,field){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        datetmp = "dateadd(month,-1,getdate())";
    }
    return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,1, "+datetmp+")),0)),112)";
}
//季度
//獲取當前季度的第一天
function getCurrentQuarterFirst(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        datetmp = "dateadd(quarter,-1,getdate())";
    }
    return "convert(char("+length+"),DATEADD(quarter,DATEDIFF(quarter,0,"+datetmp+"),0),112) ";
}
//獲取當前季度的最後一天
function getCurrentQuarterLast(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "1";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        datetmp = "0";
    }
    return "convert(char("+length+"),dateadd(day,-1,DATEADD(quarter,DATEDIFF(quarter,0,dateadd(quarter,"+datetmp+",getdate())),0)),112)";
}
//半年
//獲取當前半年的第一天
function getCurrentHalfFirst(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        datetmp = "dateadd(month,-6,getdate())";
    }
    return "case when datediff(day,getdate(),DATEADD(year,DATEDIFF(year,0,getdate()),365/2-1)) < 0 "
           + " then convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,getdate()),365/2-1),112) "
           + " else convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,getdate()),0),112) end";
}
//獲取當前半年的最後一天
function getCurrentHalfLast(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        datetmp = "dateadd(month,-6,getdate())";
    }
    return "case when datediff(day,"+datetmp+",DATEADD(year,DATEDIFF(year,0,"+datetmp+"),365/2-1)) < 0 "
           + " then convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,"+datetmp+"),365),112) "
           + " else convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,"+datetmp+"),365/2-1),112) end ";
}
//年
//獲取當前年的第一天
function getCurrentYearFirst(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        datetmp = "dateadd(year,-1,getdate())";
    }
    return "convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,"+datetmp+"),0),112) ";
}
//獲取當前年的最後一天
function getCurrentYearLast(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "getdate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        datetmp = "dateadd(year,-1,getdate())";
    }
    return "convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,"+datetmp+"),365),112) ";
}
/***********************本期 End*********************************/
/*********************近期***************************************/
//日
//日的起始區間
function getRecentDayFirst(length,num,IsNotContainMe,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(day,-"+(num-1)+",getdate()),112) ";
}
//日的結束區間
function getRecentDayLast(length,num,IsNotContainMe,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    if(IsNotContainMe){
        return "convert(char("+length+"),DATEADD(day,-1,getdate()),112) ";
    }else{
        return "convert(char("+length+"),DATEADD(day,0,getdate()),112) ";
    }
}
//周
//獲取周的第一天
function getRecentWeekFirst(length,num,IsNotContainMe,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,getdate()),-"+(num-1)*7+"-1),112) ";
}
//獲取周的最後一天
function getRecentWeekLast(length,num,IsNotContainMe,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    if(IsNotContainMe){
        return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,getdate()),0),112) ";
    }else{
        return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,getdate()),6),112) ";
    }
}
//月
//獲取月的第一天
function getRecentMonthFirst(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num + 1;
    }
    var datetmp = "getdate()";
    if(tablename.toUpperCase().indexOf("JCIC") == -1){
        datetmp = "getdate()";
    }else{
       datetmp = "dateadd(day,-17,getdate())";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
    }
    return "convert(char("+length+"),DATEADD(month, DATEDIFF(month, 0, DATEADD(month,-"+(num-1)+", "+datetmp+")), 0),112) ";
}
//獲取月的最後一天
function getRecentMonthLast(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "getdate()";
    if(tablename.toUpperCase().indexOf("JCIC") == -1){
        datetmp = "getdate()";
    }else{
       datetmp = "dateadd(day,-17,getdate())";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
    }
    if(IsNotContainMe){
        num=0;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = num - 1;
        }
        return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,"+num+", "+datetmp+")),0)),112) ";
    }else{
        num=1;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = num - 1;
        }
        return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,"+num+", "+datetmp+")),0)),112) ";
    }
    
}
//季度
//獲取季度的第一天
function getRecentQuarterFirst(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num + 1;
    }
    return "convert(char("+length+"),DATEADD(quarter,DATEDIFF(quarter,0,DATEADD(quarter,-"+(num-1)+", getdate())),0),112) ";
}
//獲取季度的最後一天
function getRecentQuarterLast(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(IsNotContainMe){
        num=0;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = num - 1;
        }
        return "convert(char("+length+"),dateadd(day,-1,DATEADD(quarter,DATEDIFF(quarter,0,dateadd(month,3,dateadd(quarter,"+num+",getdate()))),0)),112)";
    }else{
        num=0;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = num - 1;
        }
        return "convert(char("+length+"),dateadd(day,-1,DATEADD(quarter,DATEDIFF(quarter,0,dateadd(month,3,dateadd(quarter,"+num+",getdate()))),0)),112)";
    }
}
//半年
//獲取半年的第一天
function getRecentHalfFirst(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num + 1;
    }
    
    return "case when datediff(day,dateadd(year,-"+(num-1)+",getdate()),DATEADD(year,DATEDIFF(year,0,dateadd(year,-"+(num-1)+",getdate())),365/2-1)) < 0 "
           + " then convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(year,-"+(num-1)+",getdate())),365/2-1),112) "
           + " else convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(year,-"+(num-1)+",getdate())),0),112) end";
}
//獲取半年的最後一天
function getRecentHalfLast(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(IsNotContainMe){
        num=-6;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = -12;
        }
        return "case when datediff(day,getdate(),DATEADD(year,DATEDIFF(year,0,dateadd(month,"+num+",getdate())),365/2-1)) < 0 "
           + " then convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(month,"+num+",getdate())),365),112) "
           + " else convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(month,"+num+",getdate())),365/2-1),112) end ";
    }else{
        num=0;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = -6;
        }
        return "case when datediff(day,getdate(),DATEADD(year,DATEDIFF(year,0,dateadd(month,"+num+",getdate())),365/2-1)) < 0 "
           + " then convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(month,"+num+",getdate())),365),112) "
           + " else convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(month,"+num+",getdate())),365/2-1),112) end ";
    }
}
//年
//獲取年的第一天
function getRecentYearFirst(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num + 1;
    }
    
    return "convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(year,-"+(num-1)+",getdate())),0),112) ";
}
//獲取年的最後一天
function getRecentYearLast(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(IsNotContainMe){
        num=-1;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = -2;
        }
        return "convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(year,"+num+",getdate())),365),112) ";
    }else{
        num=0;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = -1;
        }
        return "convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(year,"+num+",getdate())),365),112) ";
    }
}
/***********************近期 End*********************************/
/*********************前期***************************************/
//日
//日的起始區間
function getPreDayFirst(length,num,field,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(day,-"+(num)+",getdate()),112) ";
}
//日的結束區間
function getPreDayLast(length,num,field,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    
    return "convert(char("+length+"),DATEADD(day,-1,getdate()),112) ";
}
//周
//獲取周的第一天
function getPreWeekFirst(length,num,field,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,getdate()),-"+num*7+"-1),112) ";
}
//獲取周的最後一天
function getPreWeekLast(length,num,field,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,getdate()),-"+(num-1)*7+"),112) ";
}
//月
//獲取月的第一天
function getPreMonthFirst(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num + 1;
    }
    var datetmp = "getdate()";
    if(tablename.toUpperCase().indexOf("JCIC") == -1){
        datetmp = "getdate()";
    }else{
       datetmp = "dateadd(day,-17,getdate())";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
    }
    return "convert(char("+length+"),DATEADD(month, DATEDIFF(month, 0, DATEADD(month,-"+num+", "+datetmp+")), 0),112) ";
}
//獲取月的最後一天
function getPreMonthLast(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num;
    }else{
        num = num-1;
    }
    var datetmp = "getdate()";
    if(tablename.toUpperCase().indexOf("JCIC") == -1){
        datetmp = "getdate()";
    }else{
       datetmp = "dateadd(day,-17,getdate())";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
    }
    return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,-"+num+", "+datetmp+")),0)),112) ";
}
//季度
//獲取季度的第一天
function getPreQuarterFirst(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num+1;
    }
    return "convert(char("+length+"),DATEADD(quarter,DATEDIFF(quarter,0,DATEADD(quarter,-"+num+", getdate())),0),112) ";
}
//獲取季度的最後一天
function getPreQuarterLast(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }

    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        //delete by chuan.yin in 2009-7-31
        //num = num;
        //added by chuan.yin in 2009-7-31
        num = num+1;
    }else{
        //delete by chuan.yin in 2009-7-31
        //num = num-1;
        //added by chuan.yin in 2009-7-31
        num = num;
    }
    return "convert(char("+length+"),dateadd(day,-1,DATEADD(quarter,DATEDIFF(quarter,0,dateadd(month,3,dateadd(quarter,-"+num+",getdate()))),0)),112)";
}
//半年
//獲取半年的第一天
function getPreHalfFirst(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = (num + 1);
    }
    return "case when datediff(day,dateadd(month,-6*"+num+",getdate()),DATEADD(year,DATEDIFF(year,0,dateadd(month,-6*"+num+",getdate())),365/2-1)) < 0 "
           + " then convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(month,-6*"+num+",getdate())),365/2-1),112) "
           + " else convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(month,-6*"+num+",getdate())),0),112) end";
}
//獲取半年的最後一天
function getPreHalfLast(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }

    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num;
    }else{
       num = num-1; 
    }
    return "case when datediff(day,dateadd(month,-6*"+num+",getdate()),DATEADD(year,DATEDIFF(year,0,dateadd(month,-6*"+num+",getdate())),365/2-1)) < 0 "
           + " then convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(month,-6*"+num+",getdate())),365),112) "
           + " else convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(month,-6*"+num+",getdate())),365/2-1),112) end ";
}
//年
//獲取年的第一天
function getPreYearFirst(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num + 1;
    }
    return "convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(year,-"+num+",getdate())),0),112) ";
}
//獲取年的最後一天
function getPreYearLast(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num;
    }else{
        num = num -1;
    }
    return "convert(char("+length+"),DATEADD(year,DATEDIFF(year,0,dateadd(year,-"+num+",getdate())),365),112) ";
}
/*********************前期 end***********************************/
/*******************************Tailor Made Report*****************************/
/**********本期**********/
//周
//獲取本周的第一天
function getCurrentWeekFirst4Tailor(length,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,1,PLMSSystem.dbo.GetBatchDate()),1),112) ";
}
//獲取本周的最後一天
function getCurrentWeekLast4Tailor(length,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,1,PLMSSystem.dbo.GetBatchDate()),1),112) ";
}
//月
//獲取當前月的第一天
function getCurrentMonthFirst4Tailor(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "PLMSSystem.dbo.GetBatchDate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        if(tablename.toUpperCase().indexOf("JCIC") == -1){
            datetmp = "dateadd(month,-1,PLMSSystem.dbo.GetBatchDate())";
        }else{
            datetmp = "dateadd(month,-1,dateadd(day,-17,PLMSSystem.dbo.GetBatchDate()))";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
        }
        
    }
    return "convert(char("+length+"),DATEADD(month, DATEDIFF(month, 0, "+datetmp+"), 0),112)";
}
//獲取當前月的最後一天
function getCurrentMonthLast4Tailor(length,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    var datetmp = "PLMSSystem.dbo.GetBatchDate()";
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        if(tablename.toUpperCase().indexOf("JCIC") == -1){
            datetmp = "dateadd(month,-1,PLMSSystem.dbo.GetBatchDate())";
        }else{
            datetmp = "dateadd(month,-1,dateadd(day,-17,PLMSSystem.dbo.GetBatchDate()))";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
        }
    }
    return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,1, "+datetmp+")),0)),112)";
}
/**********近期**********/
//周
//獲取周的第一天
function getRecentWeekFirst4Tailor(length,num,IsNotContainMe,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,PLMSSystem.dbo.GetBatchDate()),-"+(num-1)*7+"-1),112) ";
}
//獲取周的最後一天
function getRecentWeekLast4Tailor(length,num,IsNotContainMe,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    if(IsNotContainMe){
        return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,PLMSSystem.dbo.GetBatchDate()),0),112) ";
    }else{
        return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,PLMSSystem.dbo.GetBatchDate()),6),112) ";
    }
}
//月
//獲取月的第一天
function getRecentMonthFirst4Tailor(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num + 1;
    }
    var datetmp = "PLMSSystem.dbo.GetBatchDate()";
    if(tablename.toUpperCase().indexOf("JCIC") == -1){
        datetmp = "PLMSSystem.dbo.GetBatchDate()";
    }else{
        datetmp = "dateadd(day,-17,PLMSSystem.dbo.GetBatchDate())";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
    }
    return "convert(char("+length+"),DATEADD(month, DATEDIFF(month, 0, DATEADD(month,-"+(num-1)+", "+datetmp+")), 0),112) ";
}
//獲取月的最後一天
function getRecentMonthLast4Tailor(length,num,IsNotContainMe,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    
    var datetmp = "PLMSSystem.dbo.GetBatchDate()";
    if(tablename.toUpperCase().indexOf("JCIC") == -1){
        datetmp = "PLMSSystem.dbo.GetBatchDate()";
    }else{
        datetmp = "dateadd(day,-17,PLMSSystem.dbo.GetBatchDate())";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
    }
    if(IsNotContainMe){
        num=0;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = num - 1;
        }
        return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,"+num+", "+datetmp+")),0)),112) ";
    }else{
        num=1;
        if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
        {
            num = num - 1;
        }
        return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,"+num+", "+datetmp+")),0)),112) ";
    }
    
}
/**********前期**********/
//周
//獲取周的第一天
//周
//獲取周的第一天
function getPreWeekFirst4Tailor(length,num,field,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,PLMSSystem.dbo.GetBatchDate()),-"+num*7+"-1),112) ";
}
//獲取周的最後一天
function getPreWeekLast4Tailor(length,num,field,tablename)
{
    if(length == null)
    {
        length = 8;
    }
    return "convert(char("+length+"),DATEADD(wk,DATEDIFF(wk,0,PLMSSystem.dbo.GetBatchDate()),-"+(num-1)*7+"),112) ";
}
//月
//獲取月的第一天
function getPreMonthFirst4Tailor(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num + 1;
    }
    var datetmp = "PLMSSystem.dbo.GetBatchDate()";
    if(tablename.toUpperCase().indexOf("JCIC") == -1){
        datetmp = "PLMSSystem.dbo.GetBatchDate()";
    }else{
        datetmp = "dateadd(day,-17,PLMSSystem.dbo.GetBatchDate())";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
    }
    return "convert(char("+length+"),DATEADD(month, DATEDIFF(month, 0, DATEADD(month,-"+num+", "+datetmp+")), 0),112) ";
}
//獲取月的最後一天
function getPreMonthLast4Tailor(length,num,field,tablename){
    if(length == null)
    {
        length = 8;
    }
    
    if(field.toLowerCase() != "[upddatetime]" && field.toLowerCase() != "[batch_date]")
    {
        num = num;
    }else{
        num = num-1;
    }
    var datetmp = "PLMSSystem.dbo.GetBatchDate()";
    if(tablename.toUpperCase().indexOf("JCIC") == -1){
        datetmp = "PLMSSystem.dbo.GetBatchDate()";
    }else{
        datetmp = "dateadd(day,-17,PLMSSystem.dbo.GetBatchDate())";//JCIC的資料都是系統日為18日抛查，歷時一個月，到下個月的17日完成，所以-17 
    }
    return "convert(char("+length+"),DATEADD(day,-1,DATEADD(month,DATEDIFF(month,0,DATEADD(month,-"+num+", "+datetmp+")),0)),112) ";
}

/*******************************Tailor Made Report end*************************/
