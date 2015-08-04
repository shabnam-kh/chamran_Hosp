/**
 * Created by klappo on 7/4/15.
 */
 function sendReq(digit,callFail,callSuccess) {
         $.ajax(
             {
                 url: serverURL + "/Chamran_Hosp",
                  data: {counter:digit},
                 success: function (data, textStatus, jqXHR) {
                     console.log("ajax req " + textStatus);
                     console.log("ajax req data " + data);
                     callSuccess(data);
                 },
                 error: function (jqXHR, textStatus, errorThrown)
                 {
                     console.log("ajax req fail" + textStatus);
                     console.log("ajax req error " + errorThrown);
                     callFail();
                 }
     }
         )


 }