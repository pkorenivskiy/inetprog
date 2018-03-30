$(document).ready(function(){
    $('#btnLab32Run').click(btnLab32Run_Click);
});

function btnLab32Run_Click() {
    var selector = $("#txtSel").val();

    console.log(selector);
    $(selector).css("background", randomColor());
}

function randomColor () {
    var back = ["#ff0000","blue","gray","red","green", "yellow"];
    var rand = back[Math.floor(Math.random() * back.length)];
    return rand;
  };