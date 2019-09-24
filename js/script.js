$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");

      });
});



////* global
$(function()
{

  'use strict';

  var Header=$('.slider');
  //addijust header height
  jQuery(document).ready(function (){
        $('.couter').counterUp({
          delay: 10,
          time: 1000
          });
        });
  Header.height($(window).height());
  $(window).resize(function ()
{
  Header.height($(window).height());
});

  ////active and disactive link
   $('.link li').click(function ()
 {
   $(this).addClass('active').siblings().removeClass('active')
 });




});


///Gallary Generator Image
function getRndInteger(min, max) {
  var nums = [],
  ranNums = [],
     f,g=0
     j = 0;
 for ( f = 1; f < 40; f++)//number
  {
 nums[g]=f;
 g++;
 }
 var i = nums.length;
 while (i--) {
     j = Math.floor(Math.random() * (i+1));
     ranNums.push(nums[j]);
     nums.splice(j,1);
 }

  return ranNums;
}

 var allImages = "";
var i;
let number=[];
number = getRndInteger(1, 39);
 for ( i = 0; i < 30; i++) {

   allImages += '<img src="images/Gallary/photos- '+ '('+number[i]+')'+ '.jpg'+'" alt="Marilyn Monroe'+(i+1)+'">';

 }
 var temp=number.sort();
 console.log(temp);
 $('#photos').append(allImages);
 ///gallary
