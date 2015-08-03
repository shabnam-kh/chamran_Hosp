/**
 * Created by klappo on 8/1/15.
 */
sendReq(function(){},function(data){
   updator(JSON.parse(data));
});


function updator(data){
    $.each(data.Digital,function(key,val){
        console.log("key "+key);
        console.log("value "+val);
        if(val==1){
            $("#"+key).show();
        }
        if(key==400 || key==407){
            $(".id"+key).show();
        }
    })
}