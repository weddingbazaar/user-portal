/**
 * Created by asyas on 11/23/2015.
 */

function itemsave1(cccc,mmm){
    sessionStorage.itm=cccc;
    sessionStorage.category=mmm;
    window.location.href = "item.html";
}

function getdata() {
    //var categ = localStorage.subcat;

        $("#searchcat").html("Wishlist");
        $("#banner").find(".image").css('background-image', 'url("img/wedplan.jpg")');


    var bandwish=new Array();
    var lawnwish=new Array();
    var photogwish=new Array();
    var wedplanwish=new Array();

    //initializing parse
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var query = new Parse.Query(Parse.User);
    query.get(Parse.User.current().id, {
        success: function (results) {
            bandwish=results.get('cart');
            var len=0;
            if(bandwish!=undefined)
                len =bandwish.length;


            for (var i = 0; i < len; i++) {
                var abc=bandwish[i].subcat;
                console.log(abc);
                var wed = Parse.Object.extend(abc);
                var query1 = new Parse.Query(wed);
                query1.get(bandwish[i].product, {
                    success: function (gameScore) {
                        var object=gameScore;
                        var name1;
                        var vendor;
                        var phno;
                        var objid;
                        name1 = object.get('bandname');
                        vendor = object.get('provider');
                        phno = object.get('mobno');
                        objid = object.id;
                        if (phno == undefined) {
                            phno = object.get("phno");
                        }
                        var $abc = $("#clone").clone().attr("id", "clone" + (len--));
                        $abc.find(".pname").html(name1);
                        var itmsv = 'itemsave1("' + objid + '","wedplan");return false;'
                        $abc.find("a").attr("onclick", itmsv);
                        console.log(abc);
                        var xyz = 'cartrem("' + objid + '","'+abc+'")';
                        $abc.find(".cartadd").attr('onclick', xyz);
                        if (vendor != undefined) {
                            $abc.find(".vendor").css('display', '');
                        }
                        $abc.find(".vname").html(vendor);
                        $abc.find("#ph").html(phno);
                        $("tbody").append($abc);
                    },
                    error: function (error) {
                        alert("Error: " + error.code + " " + error.message);
                        window.location.href='error.html';
                    }
                });
            }
        },
        error: function (error) {
            alert("Error: " + error.code + " " + error.message);
            window.location.href='error.html';
        }
    });


//    #recommended
                    var out = '';
                        for (var i = 1; i < 4; i++) {
                            var recom = '<li style="width: inherit;position: relative;">' +
                                '<img src="' + 'img/works/' + i + '.jpg' + '" class="col-sm-12" style="padding: 0px 0px 20px 0px;">' +
                                '<div class="clearfix col-sm-12" style="padding: 0px 0px 0px 80px;">' +
                                '<p style="background: white;opacity: 60; position: absolute;left: 0px;color: rgba(0,0,0,0.9);font-size: 16px" class="col-sm-12">Radha Palace - Anand Vihar</p>' +
                                '</div></li>'
                            out += recom;
                        }

                    $('#recomlist').html(out);

                }


function previouspage(){
    sessionStorage.page--;
    location.reload();
}
function nextpage(){
    sessionStorage.page++;
    location.reload();
}

function cartrem(aaaa,bbbb) {
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var currentUser = Parse.User.current();
    if (currentUser) {
        var query = new Parse.Query(Parse.User);
        query.get(Parse.User.current().id, {
            success: function(userAgain) {
                var car={"product":aaaa,"subcat":bbbb};
                var scsc=userAgain.get('cart');
                //console.log(scsc)
                var xx=scsc.map(function(d) { return d['product']; }).indexOf(aaaa);
                //console.log(xx);
                scsc.splice(xx,1);
                //console.log(car);
                //console.log(scsc);
                userAgain.save('cart',scsc);
                userAgain.save();
                location.reload();
                //cartupdate1();
            },
            error: function(){
                console.log("error");
            }
        });
        cartupdate();
    }
    else
    {
        alert("login to access cart");
    }
}


function cartupdate(){
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var query = new Parse.Query(Parse.User);
    query.get(Parse.User.current().id, {
        success: function(userAgain) {
            //console.log(userAgain);
            //console.log(userAgain.get("lawn").length);
            var cartnum=0;
            if(userAgain.get("cart")!=undefined) {
                cartnum = userAgain.get("cart").length;
                console.log(cartnum);
                console.log(userAgain.get("cart"));
            }
            $(".badge").html(cartnum);

        },
        error: function(){
            window.location.href='error.html';
        }
    });
}
