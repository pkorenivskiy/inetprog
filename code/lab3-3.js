$(document).ready(function(){
    console.log("doc ready");
    $('#btn1').click(btn1_Click);
    $('#btn2').click(btn2_Click);
    $('#btn3').click(btn3_Click);
    $('#btn4').click(btn4_Click);
});

function btn1_Click(){
    console.log("btn1_Click");
    $("p[class='red'").css("color", "red");
    $("ul").css("color", "red");
}

function btn2_Click(){
    console.log("btn2_Click");
    $("div>p").css("color", "blue");
}

function btn3_Click(){
    console.log("btn3_Click");
    //$("img:parent>strong").css("color", "green");
    $("img").parents("p").children("strong").css("font-style", "italic");
}

function btn4_Click(){
    console.log("btn4_Click");
    $(".blocks").children("div").css("background", "green");
}