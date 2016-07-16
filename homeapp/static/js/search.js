/**
 * Created by Abhishek on 10-10-2015.
 */
var subcatli={"apparel":[{"value":"boutique","name":"Boutique"},
                      {"value":"fashiondesigner","name":"Fashion Designer"},
                      {"value":"groomwear","name":"Groom Wear"},
                      {"value":"lehengasaree","name":"Lehenga/Saree"},
                      {"value":"lingerie","name":"Lingerie"},
                      {"value":"jewellery","name":"Jewellery"}],
              "astro":[{"value":"astrologer","name":"Astrologer"},
                       {"value":"pundit","name":"Pandit"},
                       {"value":"temple","name":"Temple"}],
              "grooming":[{"value":"beautyparlour","name":"Beauty Parlour"},
                        {"value":"diet","name":"Dietitian & Nutritionist"},
                        {"value":"gym","name":"Gym"},
                        {"value":"makeup","name":"Make Up Artist"},
                        {"value":"mehendi","name":"Mehendi"},
                        {"value":"nailartist","name":"Nail Artist"},
                        {"value":"spa","name":"Spa"}],
              "travel":[{"value":"luxurycar","name":"Luxury Car rent"},
                        {"value":"taxi","name":"Taxi"},
                        {"value":"travelagent","name":"Travel Agent"}],
              "events":[{"value":"eventmanagement","name":"Event Management"},
                        {"value":"liveperformer","name":"Live Performer"},
                        {"value":"weddingplanner","name":"Wedding planner"}],
              "music":[{"value":"band","name":"Band"},
                        {"value":"choreo","name":"Choreographers"},
                        {"value":"disco","name":"Disco"},
                        {"value":"dj","name":"Dj"},
                        {"value":"singer","name":"Singer"}],
              "venue":[{"value":"banquets","name":"Banquets"},
                       {"value":"farmhouse","name":"Farmhouse"},
                       {"value":"hotel","name":"Hotel"},
                       {"value":"tenthouse","name":"Tent House"}],
              "services":[{"value":"caterers","name":"Caterers"},
                         {"value":"confectionery","name":"Confectionery & Chocolates"},
                         {"value":"fireworks","name":"Fireworks"},
                         {"value":"florists","name":"Florists"},
                         {"value":"invitationcard","name":"Invitation Card"},
                         {"value":"loan","name":"Loan"},
                         {"value":"maidservent","name":"Maid & Servants"},
                         {"value":"photographer","name":"Photographers"},
                         {"value":"gift","name":"Wedding Gifts"},
                         {"value":"accessories","name":"Wedding Accessories"}],
              "agent":[{"value":"detective","name":"Detectives"},
                       {"value":"matrimonialagent","name":"Matrimonial Agent"},
                       {"value":"cookinginstructor","name":"Cooking Instructor"}]};
function subcat(){
    var cat=$("#category").find('option:selected').val().toString();
    var options='';
    //console.log(cat);
    if(cat=='none'){
        //console.log(cat);
        $('#ms').empty();
        options='<option  selected="selected" disabled>Choose a category first.</option>'
        $("#ms").append(options);
    }
    else {
        //console.log(cat);
        //console.log(subcatli[cat]);
        var len = subcatli[cat].length;
        //console.log(len);
        options='';
        $("#ms").empty();
        for(var i=0;i<len;i++) {
            //console.log(i+' '+subcatli[cat][i].value+','+subcatli[cat][i].name);
            options += '<option value="'  +subcatli[cat][i].value +'" style="">' +subcatli[cat][i].name +'</option>';
        }
        options='<option  selected="selected" disabled>Choose a category first.</option>'+options;
        $("#ms").html(options);
    }
}

function urlcode() {
    var city=$('#place').val();
    // var cat=$('#category').val();
    var subcat=$('#ms').val();
    $("#search").prop('action',"search/"+city+"/"+subcat+"");
}

//
// function subm() {
//     var place = $("#place").find('option:selected').val().toString();
//     var categ =$("#category").find('option:selected').val().toString();
//     var checkedsub = $('#ms').find('option:selected').val().toString();
//     localStorage.place = place;
//     localStorage.category = categ;
//     localStorage.subcat = checkedsub;
//     localStorage.page=1;
//     window.location.href = "searchpage.html";
// }