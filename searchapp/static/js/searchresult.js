/**
 * Created by Abhishek on 11-10-2015.
 */

var subcatli={"aprl":[{"value":"boutique","name":"Boutique"},
                {"value":"fasdes","name":"Fassion Designer"},
                {"value":"grmwr","name":"Groom Wear"},
                {"value":"lehnga","name":"Lehenga/Saree"},
                {"value":"lingerie","name":"Lingerie"},
                {"value":"jewellery","name":"Jewellery"}],
                "astro":[{"value":"astrologer","name":"Astrologer"},
                    {"value":"pandit","name":"Pandit"},
                    {"value":"temple","name":"Temple"}],
                "beauty":[{"value":"parlour","name":"Beauty Parlour"},
                    {"value":"diet","name":"Dietitian & Nutritionist"},
                    {"value":"gym","name":"Gym"},
                    {"value":"makeup","name":"Make Up Artist"},
                    {"value":"mehendi","name":"Mehendi"},
                    {"value":"nail","name":"Nail Artist"},
                    {"value":"spa","name":"Spa"}],
                "travel":[{"value":"car","name":"Luxury Car rent"},
                    {"value":"taxi","name":"Taxi"},
                    {"value":"tragent","name":"Travel Agent"}],
                "events":[{"value":"management","name":"Event Management"},
                    {"value":"performer","name":"Live Performer"},
                    {"value":"planner","name":"Wedding planner"}],
                "music":[{"value":"band","name":"Band"},
                    {"value":"choreo","name":"Choreographers"},
                    {"value":"disco","name":"Disco"},
                    {"value":"dj","name":"Dj"},
                    {"value":"singer","name":"Singer"}],
                "venue":[{"value":"banquet","name":"Banquets"},
                    {"value":"farm","name":"Farmhouse"},
                    {"value":"hotel","name":"Hotel"},
                    {"value":"tent","name":"Tent House"}],
                "service":[{"value":"caterer","name":"Caterers"},
                    {"value":"confectioner","name":"Confectionery & Chocolates"},
                    {"value":"firework","name":"Fireworks"},
                    {"value":"florist","name":"Florists"},
                    {"value":"card","name":"Invitation Card"},
                    {"value":"loan","name":"Loan"},
                    {"value":"maid","name":"Maid & Servants"},
                    {"value":"photographer","name":"Photographers"},
                    {"value":"gift","name":"Wedding Gifts"},
                    {"value":"accessories","name":"Wedding Accessories"}],
                "agent":[{"value":"detective","name":"Detectives"},
                    {"value":"matragent","name":"Matrimonial Agent"},
                    {"value":"cookinstr","name":"Cooking Instructor"}]};

var cat={"aprl":"Apparels & Clothing","astro":"Astro/Pundit","beauty":"Beauty & Grooming","travel":"Travel/Transportation","events":"Events","music":"Music & Entertainment","venue":"Venues","services":"Services","agent":"Wedding Agents"};

var cover=[1,2,3,4,5,6,7,8];
//
// function itemsave(cccc){
//     localStorage.itm=cccc;
//     window.location.href = "item.html";
// }
//
// function getdata() {
//     var categ = localStorage.category;
//     var sub=localStorage.subcat;
//     var subcat='';
//     for(var i=0;i<subcatli[categ].length;i++){
//         if(subcatli[categ][i].value === sub){
//             subcat = subcatli[categ][i].name;
//             break; //break after finding the match
//         }
//     }
//         $("#searchcat").html(cat[categ]);
//         $("#subca").html(subcat);
//     var item = cover[Math.floor(Math.random()*cover.length)];
//     console.log(item);
//     item='url("img/covers/'+item+'.jpg")';
//     $("#banner").find(".image").css("background-image",item);
//         //$("#banner").find(".image").css('background-image', 'url( "img/band.jpg" )');
//     //initializing parse
//     Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
//     var wed = Parse.Object.extend(sub);
//     var query = new Parse.Query(wed);
//     var l;
//     query.limit(1000);
//     query.find({
//         success: function (results) {
//             l = results.length;
//             tables(l,subcat);
//         },
//         error: function (error) {
//             alert("Error: " + error.code + " " + error.message);
//             window.location.href='error.html';
//         }
//     });
//
// }
//
// function tables(len,subcat){
//     var place = localStorage.place;
//     var categ = localStorage.category;
//     var sub=localStorage.subcat;
//     var page = localStorage.page;
//     $('#selcat li').each(function () {
//         if ($(this).find('h5').attr('value') == categ) {
//             $(this).find('h5').attr('id', 'catsel');
//             $(this).find('span').css('display','');
//             subcateg(categ);
//         }
//     });
//     $('#selsub li').each(function () {
//         if ($(this).find('h5').attr('value') == sub) {
//             $(this).find('h5').attr('id', 'subsel');
//             $(this).find('span').css('display','');
//         }
//     });
//     Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
//     var wed = Parse.Object.extend(sub);
//     var query = new Parse.Query(wed);
//     query.skip(12*(page-1));
//     query.limit(12);
//     query.find({
//         success: function(results) {
//             var name1;
//             var vendor;
//             var phno;
//             var objid;
//             if(page==1) {
//                 $("#prevbtn").attr('onclick','return false') ;
//             }
//             if(page>=(len/12))
//             {
//                 $("#nextbtn").attr('onclick','return false')
//             }
//             // Do something with the returned Parse.Object values
//             var j=len-(page-1)*12;
//             if(j>12)
//                 j=12;
//             for (var i = 0,l=1; i < j; i++) {
//                 var object = results[i];
//                 //name1=object.get('bandname');
//                 name1=object.get('bandname');
//                 vendor=object.get('provider');
//                 phno=object.get('mobno');
//                 objid=object.id;
//                 if(phno==undefined){
//                     phno=object.get("phno");
//                 }
//                 var $abc=$("#clone").clone().attr("id",objid);
//                 $abc.find(".product_name").html(name1);
//                 $abc.find(".product_price").html(subcat);
//                 var itmsv='itemsave("'+objid+'");return false;'
//                 $abc.find("a").attr("onclick",itmsv);
//                 var xyz='cartadd("'+objid+'")';
//                 $abc.find(".add_to_cart").attr('onclick',xyz);
//                 if(vendor!=undefined)
//                 {
//                     $abc.find(".product_provider").css('display','');
//                 }
//                 $abc.find(".product_provider").html(vendor);
//                 if(l==9)
//                     l=1;
//                 $abc.find(".product-front img").attr('src',"img/works/"+l+".jpg");
//                 l++;
//                 for(var k=1;k<9;k++){
//                     $abc.find(".product-back").find('img[alt="'+k+'"]').attr('src','img/works/'+k+'.jpg');
//                 }
//                 $abc.find("#ph").html(phno);
//                 $("#grid").append($abc);
//
//             }
//             $("#nums").html((page-1)*12+1);
//             $("#nume").html((page-1)*12+j);
//             $("#res").html(len);
//             abc();
//         },
//         error: function(error) {
//             alert("Error: " + error.code + " " + error.message);
//             window.location.href='error.html';
//         }
//     });
// }
// function cartadd(aaaa) {
//     Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
//     var currentUser = Parse.User.current();
//     if (currentUser) {
//         var query = new Parse.Query(Parse.User);
//         query.get(Parse.User.current().id, {
//             success: function(userAgain) {
//                 var car={"subcat":localStorage.subcat,"product":aaaa}
//                 userAgain.addUnique("cart",car);
//                 userAgain.save();
//
//                 if($("#cart").find("."+aaaa).length==0){
//                     cartupdate();
//                     var productCard = $("#"+aaaa+" .product-front");
//                     var position = productCard.offset();
//                     var productImage = $(productCard).find('img').get(0).src;
//                     var productName = $(productCard).find('.product_name').get(0).innerHTML;
//
//                     $("body").append('<div class="floating-cart"></div>');
//                     var cart = $('div.floating-cart');
//                     productCard.clone().appendTo(cart);
//                     $(cart).css({
//                         'top': position.top + 'px',
//                         "left": position.left + 'px'
//                     }).fadeIn("slow").addClass('moveToCart');
//                     setTimeout(function () {
//                         $("body").addClass("MakeFloatingCart");
//                     }, 800);
//                     setTimeout(function () {
//                         $('div.floating-cart').remove();
//                         $("body").removeClass("MakeFloatingCart");
//
//
//                         var cartItem = "<div class='cart-item "+aaaa+"'><div class='img-wrap'><img src='" + productImage + "' alt='' /></div><span>" + productName + "</span><strong>$39</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";
//
//                         $("#cart .empty").hide();
//                         $("#cart").append(cartItem);
//                         $("#checkout").fadeIn(500);
//
//                         $("#cart .cart-item").last()
//                             .addClass("flash")
//                             .find(".delete-item").click(function () {
//                                 $(this).parent().fadeOut(300, function () {
//                                     $(this).remove();
//                                     if ($("#cart .cart-item").size() == 0) {
//                                         $("#cart .empty").fadeIn(500);
//                                         $("#checkout").fadeOut(500);
//                                     }
//                                 })
//                             });
//                         setTimeout(function () {
//                             $("#cart .cart-item").last().removeClass("flash");
//                         }, 10);
//
//                     }, 1000);
//                 }
//             },
//             error: function(){
//                 console.log("error");
//                 window.location.href='error.html';
//             }
//         });
//         //cartupdate();
//     }
//     else
//     {
//         alert("login to access cart");
//     }
// }
// function previouspage(){
//     localStorage.page--;
//     window.location.href='searchpage.html';
// }
// function nextpage(){
//     localStorage.page++;
//     window.location.href='searchpage.html';
// }

$(document).ready(function() {
    $("#selcat h5").click(function () {
        var val = '';
        $('#selcat li').each(function () {
            if ($(this).find('h5').attr('id') == 'catsel') {
                $(this).find('h5').attr('id', '');
                $(this).find('span').css('display', 'none');
                val = $(this).find('h5').attr('value');
            }
        });
        if ($(this).attr('value') != val) {
            $(this).attr('id', 'catsel');
            $(this).find('span').css('display', '');
            subcateg($(this).attr('value'));
        }
        else {
            $("#selsub").html("<li>Select a category..</li>");
        }
    });
});


function subcateg(kat){
    //console.log(kat);
    var len = subcatli[kat].length;
    var options=''
    //$("#selsub").empty();
    for(var i=0;i<len;i++) {
        //console.log(i+' '+subcatli[cat][i].value+','+subcatli[cat][i].name);
        options += '<li><h5 onclick="subsel(\''+subcatli[kat][i].value+'\');return false;" value="'+ subcatli[kat][i].value +'" id="">'+ subcatli[kat][i].name + ' <span class="glyphicon glyphicon-remove-circle" style="display: none"></span></h5></li>';
    }
    $("#selsub").html(options);
}

function subsel(aaa){
        var val = '';
    //console.log('abc');
        $('#selsub h5').each(function () {
            if ($(this).attr('id') == 'subsel') {
                //console.log('abc');
                $(this).attr('id', '');
                $(this).find('span').css('display','none');
                val = $(this).attr('value');
            }
        });
        //if($(this).attr('value')!=val) {
        //
        //}
    $('#selsub h5').each(function () {
        if ($(this).attr('value') == aaa && $(this).attr('value')!=val) {
            //console.log('abc');
            $(this).attr('id', 'subsel');
            $(this).find('span').css('display', '');
        }
    });
}

function findven(){
    if($("#catsel").length != 0) {
        if($("#subsel").length != 0) {
            localStorage.category = $("#catsel").attr('value');
            localStorage.subcat = $("#subsel").attr('value');
            localStorage.page=1;
            window.location.href = "searchpage.html";
        }
        else
            alert("select a subcategory to search");
    }
    else
        alert("select a category and a subcategory to search");
}
