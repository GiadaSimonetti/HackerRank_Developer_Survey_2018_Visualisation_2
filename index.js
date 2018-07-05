// alert('Boooooooommmmmm')
//

$.ajaxSetup({beforeSend: function(xhr){
  if (xhr.overrideMimeType)
  {
    xhr.overrideMimeType("application/json");
  }
}
});

$.getJSON("./Country-Code-Mapping2.json", function(json) {
    console.log(json); // this will show the info it in firebug console
}, "json");
