$(document).ready(function(){
    $('#btnLab1Run').click(btnLab1Run_Click);
});

const N = 5;

function btnLab1Run_Click() {
    createHtml();

    createArray();
}

function createHtml() {
    $('#lab1ResDiv').html("");
    
    for(var i = 0; i < N; ++i) {
        var row = $("<div></div>").addClass('row');

        for(var j = 0; j < N; ++j) {
            var cell = $('<div></div>').addClass('cell');
            var cellVal = $('<div>99</div>').addClass("cellValue");
            var id = "cell-" + j + "-" + i;
            cellVal.attr("id", id);
            cell.append(cellVal);
            row.append(cell);
        }

        $('#lab1ResDiv').append(row);
    }

    $('#lab1ResDiv').fadeIn();
}

function createArray() {
    var array = new Array(N);
    for(var i = 0; i < N; ++i) {
        array[i] = new Array(N);
    }

    var nVal = -1;

    var dir = false;
    var it = 1;
    var x = Math.floor(N / 2);
    var y = Math.floor(N / 2);

    var cellId = "#cell-" + x + "-" + y;
    $(cellId).text(++nVal);
    $(cellId).fadeIn("slow");

    while(nVal < N * N) {
        for (var i = 0; i < it; ++i) {
            x = dir ? ++x : --x;
            cellId = "#cell-" + x + "-" + y;
            $(cellId).text(++nVal);
            $(cellId).hide().delay(nVal * 300).fadeIn(400).promise();
        }
        dir = dir ? false : true;

        for (var i = 0; i < it; ++i) {
            y = dir ? ++y : --y;
            cellId = "#cell-" + x + "-" + y;
            $(cellId).text(++nVal);
            $(cellId).hide().delay(nVal * 300).fadeIn(400).promise();
        }
        
        ++it;
    }
}
