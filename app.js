function Addition(){
    var number1 =+document.getElementById('txtfnumber').value
    var number2 =+document.getElementById('txtsnumber').value
    var lbl =document.getElementById('result')
    var result = number1 + number2
    lbl.innerHTML=result
    
    }   
    function Subtrate(){
        var number1 =+document.getElementById('txtfnumber').value
        var number2 =+document.getElementById('txtsnumber').value
        var lbl =document.getElementById('result')
        var result = number1 - number2
        lbl.innerHTML=result
}   
function Multiply(){
    var number1 =+document.getElementById('txtfnumber').value
    var number2 =+document.getElementById('txtsnumber').value
    var lbl =document.getElementById('result')
    var result = number1 * number2
    lbl.innerHTML=result
}   
function Divide(){
    var number1 =+document.getElementById('txtfnumber').value
    var number2 =+document.getElementById('txtsnumber').value
    var lbl =document.getElementById('result')
    var result = number1 / number2
    lbl.innerHTML=result
}   