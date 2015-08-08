/**
 * Created by klappo on 8/1/15.
 */
var randDigi=generateRand(50,60);
var chamranData={"example":[{"Digital":{"000":1,"448":1,"450":1,"432":1,"454":1,"452":1,"406":1,"motor11":generateRand(2,3),"motor22":generateRand(2,3),"motor33":generateRand(2,3),"208":generateRand(80,90),"0":generateRand(100,120),"16":generateRand(100,120),"32":generateRand(100,120),"160":generateRand(40,60),"144":generateRand(40,60),"128":generateRand(40,60),"112":generateRand(40,60),"192":randDigi,"176":randDigi+1,"48":generateRand(30,40),"64":generateRand(30,40),"96":generateRand(30,40),"80":generateRand(30,40),"fanMotor":generateRand(100,105)}},
{"Digital":{"400":1,"438":1,"436":1,"434":1,"423":1,"456":1,"motor11":generateRand(2,3),"motor22":generateRand(2,3),"motor33":generateRand(2,3),"208":generateRand(80,90),"0":generateRand(100,120),"16":generateRand(100,120),"32":generateRand(100,120),"160":generateRand(40,60),"144":generateRand(40,60),"128":generateRand(40,60),"112":generateRand(40,60),"192":randDigi,"176":randDigi+1,"48":generateRand(30,40),"64":generateRand(30,40),"96":generateRand(30,40),"80":generateRand(30,40),"fanMotor":generateRand(100,105)}},
{"Digital":{"407":1,"448":1,"450":1,"484":1,"486":1,"496":1,"006":1,"motor11":generateRand(2,3),"motor22":generateRand(2,3),"motor33":generateRand(2,3),"208":generateRand(80,90),"0":generateRand(100,120),"16":generateRand(100,120),"32":generateRand(100,120),"160":generateRand(40,60),"144":generateRand(40,60),"128":generateRand(40,60),"112":generateRand(40,60),"192":randDigi,"176":randDigi+1,"48":generateRand(30,40),"64":generateRand(30,40),"96":generateRand(30,40),"80":generateRand(30,40),"fanMotor":generateRand(100,105)}},
]}
    $(document).ready(function(){
        //sendReq(2,function(){},function(data){
        //updator(JSON.parse(data));
        updator(chamranData.example[2]);
       // });
    });

    var i=0;
var myvar=setInterval(function(){
    remover(function(){
            if(i>2){
        i=0;
        //sendReq(i,function(){},function(data){
        //updator(JSON.parse(chamranData[i]));
        updator(chamranData.example[i]);
            i++;
        //});
    }else{
              //sendReq(i,function(){},function(data){
       // updator(JSON.parse(chamranData[i]));
                updator(chamranData.example[i]);
            i++;
        //});
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

function generateRand(min,max){
    var rand=Math.round( (Math.random() * (max-min+1) + min) * 10 ) / 10;
    return rand
}