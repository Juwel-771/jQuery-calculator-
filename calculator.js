// function enterNumber(number){
//     var existNumber = $("#result").val();
//     $("#result").val(existNumber+number);
// }

// function clearAll(){
//     $("#result").val(" ");
// }

// function calculate(){
//     var result = eval($("#result").val())
//     $("#result").val(result);
// }


function enterNumber(number) {
    var existNumber = $('#result').val()
    $('#result').val(existNumber + number)
}

function clearAll() {
    $('#result').val('')
}

function calculate() {
    var result = eval($('#result').val())
    $('#result').val(result)
}

function deleteNumbers() {
    var number = $('#result').val()
    if (number != '') {
        $('#result').val($('#result').val().slice(0, -1))
    }
}