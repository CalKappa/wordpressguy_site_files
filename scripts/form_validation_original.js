$(document).ready(function() {

    // Function to validate email address through regular expression
    function validateEmail(sEmail) {
        var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        if (filter.test(sEmail)) {
            return true;

        } else {

            return false;
        };
    };

$("form").submit(function(e) {
    var nameError = "";
    var emailError = "";
    var messageError = "";

    sEmail = $("#email").val();

    if ($("#name").val() === ""){
        nameError = "Name required";
        $("#nameError").show();
        $("#name").removeClass("is-valid").addClass("is-invalid");
    }else if ($("#name").val().match("^[a-zA-Z' .,\s-]{0,150}$")) {
        nameError = "";
        $("#nameError").hide();
        $("#name").removeClass("is-invalid").addClass("is-valid");
    }else{
        nameError = "Only letters, spaces, hyphens and apostrophes allowed."
        $("#nameError").show(); // show error span
        $("#name").removeClass("is-valid").addClass("is-invalid");
    }

    $("#nameError").html('<div class="alert alert-danger" role="alert" style="padding:3px; margin:3px;">' + nameError + '</div>');
    // name validation end

    if ($("#email").val() === "") {
        emailError = "Email required"; // set error on email
        $("#emailError").show(); // show error span
        $("#email").removeClass("is-valid").addClass("is-invalid");
    } else if (validateEmail(sEmail)) {
        emailError = ""; // remove error on email
        $("#emailError").hide(); // hide error span
        $("#email").removeClass("is-invalid").addClass("is-valid");
    }else{
        emailError = "Invalid email address"; // set new error on email
        $("#emailError").show(); // show error span
        $("#email").removeClass("is-valid").addClass("is-invalid");
    }

    $("#emailError").html('<div class="alert alert-danger" role="alert" style="padding:3px; margin:3px;">' + emailError + '</div>');
    // email validation end

    if ($("#message").val() === "") {
        messageError = "Please enter your message"; // set error on message
        $("#messageError").show(); //show error span
        $("#message").removeClass("is-valid").addClass("is-invalid");
    }else{
        $("#messageError").hide(); //show error span
        $("#message").removeClass("is-invalid").addClass("is-valid");
    }

    $("#messageError").html('<div class="alert alert-danger" role="alert" style="padding:3px; margin:3px;">' + messageError + '</div>');
    // message validaation end

    if (nameError || emailError || messageError !== "") {

        // check for errors - if found block submit
        return false;

    }else{

        // all good - allow submit
        return true;
    }
});