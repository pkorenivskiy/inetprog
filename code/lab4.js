var pk = {
    selector: "",
    pk: function(selector) {
        pk.selector = selector;
        return pk;
    },
    css: function (attr, val) {
        var e = document.getElementById(this.selector);
        if (e != null) {
            e.style[attr] = val;
            return pk;
        }
    }
};


jQuery.noConflict();
//var $ = pk.pk;

function btnLab4Run_Click() {
    $("lab4ResDiv").css("color", "red").css("fontWeight", "900");
}

var x1=0, y1=0;
function btnLab4Run1() {
    x=Math.floor(Math.random()*401); 
    y=Math.floor(Math.random()*301); 
    while (Math.abs(x1-x)<=70) {x=Math.floor(Math.random()*401);} 
    while (Math.abs(y1-y)<=50) {y=Math.floor(Math.random()*301);} 
    x1=x; 
    y1=y;
    cobj = document.getElementById("btnLab4Run1"); 
    cobj.style.left = x+"px"; 
    cobj.style.top = y+"px"; 
}

const N = 5;
jQuery(document).ready(function(){
    createHtml();
});

function createHtml() {
    jQuery('#lab4ResDiv1').html("");
    
    for(var i = 0; i < N; ++i) {
        var row = jQuery("<div></div>").addClass('row');

        for(var j = 0; j < N; ++j) {
            var cell = jQuery('<div></div>').addClass('cell');
            var cellVal = jQuery('<div>(#)</div>').addClass("cellValue4");
            var id = "cell-" + j + "-" + i;
            cellVal.attr("rowNum", i);
            cellVal.attr("colNum", j);
            cell.append(cellVal);
            row.append(cell);
        }

        jQuery('#lab4ResDiv1').append(row);
    }

    jQuery('#lab4ResDiv1').fadeIn();

    jQuery(".cell > div").mouseover(function() {
        var rowNum = jQuery(this).attr("rowNum");
        var colNum = jQuery(this).attr("colNum");
        jQuery(".cell > div").removeClass("cellValue4Select");
        jQuery(".cell > div").addClass("cellValue4");
        jQuery(".cell > div[rowNum='" + rowNum + "']").toggleClass("cellValue4Select");
        jQuery(".cell > div[colNum='" + colNum + "']").toggleClass("cellValue4Select");
        jQuery(this).removeClass("cellValue4");
        jQuery(this).addClass("cellValue4Select");
    });
}