//jQuery start---
(function($) {

var baseUrl = './src/';


var myHtml = [
              {make:'headBox',    load:'all/headBox.html'},
              {make:'bannerBox',  load:'main/bannerBox.html'},
              // {make:'contentBox', load:'main/contentBox.html'},
              // {make:'lnbBox',     load:'main/lnbBox.html'},
              // {make:'sectionBox',     load:'main/sectionBox.html'},
              {make:'articleBox',     load:'main/articleBox.html'},
              {make:'footBox',    load:'all/footBox.html'},
              ]

for(var i = 0; i < myHtml.length; i++){
 // console.log(' ');
  ImportFile(myHtml[i].make, baseUrl + myHtml[i].load);
}

}) (this.jQuery);

//jQuery end---