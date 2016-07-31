/**
 * Created by asyas on 03-11-2015.
 */

function itemdata() {
    var place = localStorage.place;
    var categ = localStorage.category;
    var itm = localStorage.itm;
    var sub=localStorage.subcat;
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var currentUser = Parse.User.current();
    if (currentUser) {
        var query = new Parse.Query(Parse.User);
        query.get(Parse.User.current().id, {
            success: function (userAgain) {
                //console.log(userAgain);
                if (userAgain.get("userorvendor") == 'vendor' && (userAgain.get('vendorinfo')[1]) == itm)
                    $('#edit').css('display', '');
            }
        });
    }
    var wed = Parse.Object.extend(sub);
    var query = new Parse.Query(wed);
    query.get(itm, {
        success: function (result) {
            var address = result.get("Address");
            var bndname = result.get("bandname");
            var provider = result.get("provider");
            var web=result.get('web');
            var about=result.get('about');
            var mobno=result.get('mobno');
            var phno=result.get('phno');
            // The object was retrieved successfully.
            $("#searchcat").html(bndname);
            $(".product-desc").html(address);
            $("#location").html(provider);
            $("#loc").html(place.toUpperCase());
            $("#serv").html(categ.toUpperCase());
            var xyz='cart("'+itm+'")';
            $(".cartadd").attr('onclick',xyz);
            //services show and hide
            $("#" + categ).css("display", "");
            if(web!=undefined)
                $('#website').attr('href','https://'+web);
            if(about!=undefined)
                $('#about').html(about);
            if(mobno!=undefined){
                if(phno!=undefined){
                    $('#cnum').html(mobno+','+phno);
                }
                else
                    $('#cnum').html(mobno);
            }
            else if(phno!=undefined){
                $('#cnum').html(phno);
            }
            //console.log('should have appeared');
        },
        error: function (error) {
            alert("Error: " + error.code + " " + error.message);
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
        }
    });
}
