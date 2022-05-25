$('.resume-up').click(function(){ $('#imgupload').trigger('click'); });



function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

updateList = function() {
    var input = document.getElementById('imgupload');
    var output = document.getElementById('file');
  
    output.innerHTML = '<ul>';
    for (var i = 0; i < input.files.length; ++i) {
      output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
    }
    output.innerHTML += '</ul>';
}