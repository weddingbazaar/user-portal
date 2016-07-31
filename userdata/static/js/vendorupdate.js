/**
 * Created by asyas on 12/3/2015.
 */

function getvinfo(){
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var query = new Parse.Query(Parse.User);
    query.get(Parse.User.current().id, {
        success: function(userAgain) {
            //console.log(userAgain);
            var vin= userAgain.get("vendorinfo");
            var quer=new Parse.Query(vin[0]);
            quer.get(vin[1],{
                success: function(vdata){
                    //console.log(vdata);
                    $('#name').val(vdata.get("provider"));
                    $('#semail').val(userAgain.get("email"));
                    //$('#semail').attr('disabled');
                    $('#phno').val(vdata.get("mobno"));
                    $('#service').val(vdata.get("bandname"));
                    $('#categ').val(vin[0]);
                    $('#address').val(vdata.get("Address"));
                    $('#splace').val(vdata.get("place"));
                    //$('#postcode').val(vdata.get("pincode"));
                    $('#about').val(vdata.get("about"));
                    $('#web').val(vdata.get("web"));
                    $('#registration_date').val(vdata.get("established"));
                    $('#time_open').val(vdata.get("timeop"));
                    $('#time_closed').val(vdata.get("timecl"));
                    $('#update').attr('onclick','dupdate("'+vin[0]+'","'+vin[1]+'")');
                },
                error: function(error){
                    alert(error);
                }
            })
        },
        error: function(){
            window.location.href='error.html';
        }
    });
}

function dupdate(a,b){
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    console.log(a);
    console.log(b);
    var query = new Parse.Query(a);
    query.get(b,{
        success:function(vdata){
            vdata.set('provider',$('#name').val());
            vdata.set('mobno',$('#phno').val());
            vdata.set('bandname',$('#service').val());
            vdata.set('Address',$('#address').val());
            vdata.set('place',$('#splace').val());
            vdata.set('about',$('#about').val());
            vdata.set('web',$('#web').val());
            vdata.set('timeop',$('#time_open').val());
            vdata.set('timecl',$('#time_closed').val());
            vdata.save(null, {

                success:function(){
                    location.reload();
                },
                error: function(userAgain, error) {
                    console.log(error);
                    // This will error, since the Parse.User is not authenticated
                }
            });
        },
        error: function(error){
            alert(error);
        }
    })
}