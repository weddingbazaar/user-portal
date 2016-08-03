/**
 * Created by Abhishek on 11-10-2015.
 */

var subcatli = {
    "apparel": [{"value": "boutique", "name": "Boutique"},
        {"value": "fashiondesigner", "name": "Fashion Designer"},
        {"value": "groomwear", "name": "Groom Wear"},
        {"value": "lehengasaree", "name": "Lehenga/Saree"},
        {"value": "lingerie", "name": "Lingerie"},
        {"value": "jewellery", "name": "Jewellery"}],
    "astro": [{"value": "astrologer", "name": "Astrologer"},
        {"value": "pundit", "name": "Pandit"},
        {"value": "temple", "name": "Temple"}],
    "grooming": [{"value": "beautyparlour", "name": "Beauty Parlour"},
        {"value": "diet", "name": "Dietitian & Nutritionist"},
        {"value": "gym", "name": "Gym"},
        {"value": "makeup", "name": "Make Up Artist"},
        {"value": "mehendi", "name": "Mehendi"},
        {"value": "nailartist", "name": "Nail Artist"},
        {"value": "spa", "name": "Spa"}],
    "travel": [{"value": "luxurycar", "name": "Luxury Car rent"},
        {"value": "taxi", "name": "Taxi"},
        {"value": "travelagent", "name": "Travel Agent"}],
    "events": [{"value": "eventmanagement", "name": "Event Management"},
        {"value": "liveperformer", "name": "Live Performer"},
        {"value": "weddingplanner", "name": "Wedding planner"}],
    "music": [{"value": "band", "name": "Band"},
        {"value": "choreo", "name": "Choreographers"},
        {"value": "disco", "name": "Disco"},
        {"value": "dj", "name": "Dj"},
        {"value": "singer", "name": "Singer"}],
    "venue": [{"value": "banquets", "name": "Banquets"},
        {"value": "farmhouse", "name": "Farmhouse"},
        {"value": "hotel", "name": "Hotel"},
        {"value": "tenthouse", "name": "Tent House"}],
    "services": [{"value": "caterers", "name": "Caterers"},
        {"value": "confectionery", "name": "Confectionery & Chocolates"},
        {"value": "fireworks", "name": "Fireworks"},
        {"value": "florists", "name": "Florists"},
        {"value": "invitationcard", "name": "Invitation Card"},
        {"value": "loan", "name": "Loan"},
        {"value": "maidservent", "name": "Maid & Servants"},
        {"value": "photographer", "name": "Photographers"},
        {"value": "gift", "name": "Wedding Gifts"},
        {"value": "accessories", "name": "Wedding Accessories"}],
    "agent": [{"value": "detective", "name": "Detectives"},
        {"value": "matrimonialagent", "name": "Matrimonial Agent"},
        {"value": "cookinginstructor", "name": "Cooking Instructor"}]
};

var cat = {
    "aprl": "Apparels & Clothing",
    "astro": "Astro/Pundit",
    "beauty": "Beauty & Grooming",
    "travel": "Travel/Transportation",
    "events": "Events",
    "music": "Music & Entertainment",
    "venue": "Venues",
    "services": "Services",
    "agent": "Wedding Agents"
};

var cover = [1, 2, 3, 4, 5, 6, 7, 8];

$(document).ready(function () {

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


function subcateg(kat) {
    //console.log(kat);
    var len = subcatli[kat].length;
    var options = ''
    //$("#selsub").empty();
    for (var i = 0; i < len; i++) {
        //console.log(i+' '+subcatli[cat][i].value+','+subcatli[cat][i].name);
        options += '<li><h5 onclick="subsel(\'' + subcatli[kat][i].value + '\');return false;" value="' + subcatli[kat][i].value + '" id="">' + subcatli[kat][i].name + ' <span class="glyphicon glyphicon-remove-circle" style="display: none"></span></h5></li>';
    }
    $("#selsub").html(options);
}

function subsel(aaa) {
    var val = '';
    //console.log('abc');
    $('#selsub h5').each(function () {
        if ($(this).attr('id') == 'subsel') {
            //console.log('abc');
            $(this).attr('id', '');
            $(this).find('span').css('display', 'none');
            val = $(this).attr('value');
        }
    });
    //if($(this).attr('value')!=val) {
    //
    //}
    $('#selsub h5').each(function () {
        if ($(this).attr('value') == aaa && $(this).attr('value') != val) {
            //console.log('abc');
            $(this).attr('id', 'subsel');
            $(this).find('span').css('display', '');
        }
    });
}

function findven() {
    if ($("#catsel").length != 0) {
        if ($("#subsel").length != 0) {
            // localStorage.category = $("#catsel").attr('value');
            // localStorage.subcat = $("#subsel").attr('value');
            var link= '/search/'+'delhi/'+ $("#subsel").attr('value');
            window.location.href = link;
        }
        else
            alert("select a subcategory to search");
    }
    else
        alert("select a category and a subcategory to search");
}
