$(function(){
  var needles = [
    { value: 'needle', image: "assets/black.png" },
    { value: 'knitting needle', image: "assets/cream.png"},
    { value: 'pin', image: "assets/ming.png" },
    { value: 'obelisk', image: "assets/orange.png"},
    { value: 'safety pin', image: "assets/purple.png" },
    { value: 'crochet hook', image: "assets/red.png" },
    { value: 'bacteria', image: "assets/black.png" },
    { value: 'Cleopatras needle', image: "assets/ming.png" },
  ];
  
 $('#autocomplete').autocomplete({
    lookup: needles,
    onSelect: function(suggestion) {
      var searchimage = 'a ' + suggestion.value  + ' </br> <img src="' + suggestion.image + '" <p>in a hay stack</p>';
      // var searchimage = '<p>a </p>'<p> + suggestion.value + "<\p>" </br> <img src="' + suggestion.image + '"<p> in a haystack</p>";
      $('#outputcontent').html(searchimage);
    
    }
  });  
  $( "#autocomplete" ).keyup(function() {
    var inputValue = $('#autocomplete').val();
    // console.log(inputValue);
    if (inputValue.length === 0) {
      $('#outputcontent').html('');
    }
  
  });
});
