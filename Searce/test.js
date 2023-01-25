function processRequestForms() {
    var userFormObj = document.getElementById('userReuestFrmData');

    if (userFormObj.elements["remarks"].value != '') {
        $("#userRqBttn").attr("disabled", true);

        google.script.run.withSuccessHandler(submitAlert).setData(userFormObj);
    }
    else {
        alert("Please fill the Response");
    }
}
function submitAlert() {

    alert("Your Response has been Sent");
    document.getElementById('remarks').value = '';
}