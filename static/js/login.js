/**
 * Created by asyas on 11/20/2015.
 */

function signup(){
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var email=$('#snemail').val();
    var pass=$('#snpassword').val();
    var repass=$('#password_confirmation').val();
    var phone=$('#snphone').val();
    if(pass==repass) {
        var user = new Parse.User();
        user.set("username", email);
        user.set("password", pass);
        user.set("email", email);
        user.set("userorvendor","user");

        // other fields can be set just like with Parse.Object
        user.set("phone", phone);

        user.signUp(null, {
            success: function () {
                alert('Verification Email has been sent to your mail');
                location.reload();
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.

                alert("Error: " + error.code + " " + error.message);window.location.href='error.html';
            }
        });
    }
    else{
        alert("Password Mismatch");
        document.getElementById("#snform").reset();
    }
}
function checkuser(){
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var currentUser = Parse.User.current();
    if (currentUser) {
        $("#loginbtn").css('display','none');
        $("#logoutbtn").css('display','');
        cartupdate();
    }
}
function logout(){
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    Parse.User.logOut();
    //var currentUser = Parse.User.current();
    location.reload();
}
function  login(){
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var email=$('#email').val();
    var mypass=$('#password').val();
    Parse.User.logIn(email, mypass, {
        success: function() {
            location.reload();
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            alert("Wrong email or password");
            document.getElementById('#loginbox').reset();
        }
    });
}

function cart(aaaa) {
    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
    var currentUser = Parse.User.current();
    if (currentUser) {
    var query = new Parse.Query(Parse.User);
    query.get(Parse.User.current().id, {
        success: function(userAgain) {
            var car={"subcat":localStorage.subcat,"product":aaaa};
            userAgain.addUnique("cart",car);
            userAgain.save();
            cartupdate();
        },
        error: function(){
            console.log("error");
            window.location.href='error.html';
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


function fblogin(){

    Parse.FacebookUtils.logIn("email", {
        success: function(user) {
            if (!user.existed()) {

                FB.api('/me?fields=email', function(response) {
                    Parse.initialize("ik1UEnmGKaszcHaMmH07Ul8hE5ceDwMkk01vE6lC", "QiRmlL8M5g2dgLYDiW4PfvhG0FvNw3naX2kw0eAP");
                    var currentUser = Parse.User.current();
                    //console.log(response.email);
                    if (currentUser) {
                        var query = new Parse.Query(Parse.User);
                        query.get(Parse.User.current().id, {
                            success: function (userAgain) {
                                //console.log(userAgain);
                                userAgain.set('email', response.email);
                                userAgain.set('userorvendor', 'user');
                                userAgain.save(null, {
                                    success: function () {
                                        //alert("User signed up and logged in through Facebook!");
                                        location.reload();
                                    },
                                    error: function (userAgain, error) {
                                        alert(error);
                                    }
                                });
                            },
                            error: function (error) {
                                alert(error);
                            }
                        });
                    }
                    else {
                        alert("sorry some error");
                    }
                    //var currentUser = Parse.User.current();
                    //console.log(currentUser);
                    //console.log(response.email);

                });
            } else {
                location.reload();
            }
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
        }
    });

}

function forgotpass(){
    var email=$('#email').val();
    if(email==''){
        alert('Enter Your Email');
        return 0;
    }
    Parse.User.requestPasswordReset(email, {
        success: function() {
            alert("Password reset link has been sent to your email account");
            // Password reset request was sent successfully
        },
        error: function(error) {
            // Show the error message somewhere
            alert("Error: " + error.code + " " + error.message);
        }
    });
}