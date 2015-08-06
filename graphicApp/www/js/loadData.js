/**
 * Created by klappo on 8/1/15.
 */
    $(document).ready(function(){
        sendReq(2,function(){},function(data){
        updator(JSON.parse(data));
        });
    })

    var i=0;
var myvar=setInterval(function(){
    remover(function(){
            if(i>2){
        i=0;
        sendReq(i,function(){},function(data){
        updator(JSON.parse(data));
            i++;
        });
    }else{
              sendReq(i,function(){},function(data){
        updator(JSON.parse(data));
            i++;
        });
    }
    })

},5000);

//sendReq(function(){},function(data){
//   updator(JSON.parse(data));
//});

function updator(data){
    $.each(data.Digital,function(key,val){
        //console.log("key "+key);
        //console.log("value "+val);
        if(val==1){
            $("#"+key).show();
        }
        else{
            $("#"+key).text(val);
        }
        if(key==400 || key==407 || key==000){
            $(".id"+key).show();
        }
    })
}
function remover(callback){

        $(".indicatorLight").hide();
    $(".waterLevel").hide();
    $(".flair").hide();
        callback();

}