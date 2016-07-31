/**
 * Created by asyas on 11/24/2015.
 */
var parseFile;
var fileobj = [];
function photoupload() {
    $("#upldimg").empty();
    var fileUploadControl = $("#photoup")[0];
    console.log(fileUploadControl.files.length);
    if (fileUploadControl.files.length > 0) {
        $.each(fileUploadControl.files,function(i,value) {
            var ID='photo'+i
            var abc='<div class="col-xs-6 col-md-3 " id="'+ID+'" value="" >'+
               ' <div href="#" class="thumbnail" style="" >'+
                '<img src="img/default.gif" alt="...">'+
                '<button style="width: 100%;display:none;" class="btn btn-danger"  value="" onclick="removeim(abcdef)">'+
                '<span style="color: white">Remove</span></button>'+
                '</div> </div>';
            $("#upldimg").append(abc);
            var file = value;
            console.log(i);
            var name = "photo.jpg";
            parseFile = new Parse.File(name, file);
            //console.log(parseFile);
            //console.log(ID);
        parseFile.save().then(function (result) {
            alert('photouploaded');
            console.log(result);
            fileobj.push(result);
            ID='#photo'+i;
            $(ID).find('img').attr('src', result['_url']);
            $(ID).find('button').css('display', '');
            $(ID).find('button').attr('onclick', 'removeim("' + result['_name'] + '")');
            $(ID).attr('value',result['_name']);
            //console.log(parseFile._url);
            //console.log(fileobj);

            // The file has been saved to Parse.
        }, function (error) {
            alert('photo cnt be uploaded');
            $('#photo'+i).remove();

            // The file either could not be read, or could not be saved to Parse.
        });

    });
    }
}
function removeim(abc){
    console.log(fileobj);
    $("div[value='"+abc+"']").remove();
    fileobj.forEach(function(result, index) {
        if(result['_name'] === abc) {
            //Remove from array
            fileobj.splice(index, 1);
        }
    });
    console.log(fileobj);
}

function vendorlogin(){
    var provider=$("#name").val();
    var email=$("#semail").val();
    var pass=$("#pass").val();
    var repass=$("#repass").val();
    if(pass!=repass)
    {
        $("#pass").val('');
        $("#repass").val('');
        alert("Password mismatch. Enter Again");
        return;
    }
    var bandname=$("#service").val();
    var business=$("#categ").find('option:selected').val().toString();
    var address=$("#address").val();
    var place=$("#splace").find('option:selected').val().toString();
    var phno=$("#phno").val();
    var pin=$("#pin").val();
    var website=$("#web").val();
    var about=$("#about").val();
    var timeop=$("#time_open").val();
    var timecl=$("#time_closed").val();
    var estb=$('#egistration-date').val();
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
        var user = new Parse.User();
        user.set("username", email);
        user.set("password", pass);
        user.set("email", email);
        user.set("userorvendor","vendor");
        // other fields can be set just like with Parse.Object
        user.set("phone", phno);
        user.signUp(null, {
            success: function () {
                var GameScore = Parse.Object.extend(business);
                var gameScore = new GameScore();
                gameScore.set("bandname", bandname);
                gameScore.set("provider",provider);
                gameScore.set("mobno", phno);
                gameScore.set("place", place);
                gameScore.set("Address", address);
                gameScore.set("about",about);
                gameScore.set("timeop",timeop);
                gameScore.set("timecl",timecl);
                gameScore.set("web",website);
                gameScore.set("established",estb);
                gameScore.set("photo",fileobj);
                gameScore.save(null, {
                    success: function(gameScore) {
                        // Execute any logic that should take place after the object is saved.
                        //alert('New object created with objectId: ' + gameScore.id);
                        var currentUser = Parse.User.current();
                        if (currentUser) {
                            var query = new Parse.Query(Parse.User);
                            query.get(Parse.User.current().id, {
                                success: function(userAgain) {
                                    userAgain.set('vendorinfo',[business,gameScore.id]);
                                    userAgain.save(null, {
                                        success:function(){
                                            window.location.href="index.html";
                                        },
                                        error: function(userAgain, error) {
                                            console.log(error);
                                            // This will error, since the Parse.User is not authenticated
                                        }
                                    });
                                },
                                error: function(){
                                    console.log("error");
                                }
                            });
                        }
                        else
                        {
                            alert("sorry some error");
                        }
                    },
                    error: function(gameScore, error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                        window.location.href='error.html';
                    }
                });

            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
                window.location.href='error.html';
            }
        });
}
function checkuser1(){
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var currentUser = Parse.User.current();
    if (currentUser) {
        Parse.User.logOut();
        //var currentUser = Parse.User.current();
        location.reload();
    }
}