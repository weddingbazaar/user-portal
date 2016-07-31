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
