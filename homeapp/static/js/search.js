/**
 * Created by Abhishek on 10-10-2015.
 */
var subcatli={"aprl":[{"value":"boutique","name":"Boutique"},
                      {"value":"fasdes","name":"Fashion Designer"},
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
function subcat(){
    var cat=$("#category").find('option:selected').val().toString();
    var options=''
    //console.log(cat);
    if(cat=='none'){
        //console.log(cat);
        $('#ms').empty();
        options='<option value="none">Choose a category first.</option>'
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
        options='<option value="none">Choose a category first.</option>'+options;
        $("#ms").html(options);
    }
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