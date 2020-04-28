$( document ).ready(function() {
   /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
   var dropdown = document.getElementsByClassName("dropdown-btn");
   var i;

   for (i = 0; i < dropdown.length; i++) {
       dropdown[i].addEventListener("click", function () {
           this.classList.toggle("active");
           var dropdownContent = this.nextElementSibling;
           if (dropdownContent.style.display === "block") {
               dropdownContent.style.display = "none";
           } else {
               dropdownContent.style.display = "block";
           }
       });
   }
});
   /* John's code for highlighting buildings */

   //intial tooltip enabling for all the buildings 
   /*
    $('img').mapster();
        $('area').bind('mouseover', function() {
         $('img').mapster('tooltip',this,$(this).attr('full'));
   
       });
   */

   /* Sets what key to use when mapping for mapster*/
   var basic_opts = {
       mapKey: 'building'
   };

   /* starting values for mapster */
   var initial_opts = $.extend({}, basic_opts,
       {
           staticbuilding: true,
           fill: false,
           stroke: true,
           strokeWidth: 2,
           strokeColor: 'ff0000'
       });
   /*
$(document).ready(function(){
   $('#NEBuildings').click(function() {
       selectGroup(); 
   });
   $('#SW09Building').click(function() {
       selectSW(); 
   });
   $('#SEBUILDINGS').click(function() {
       selectSE(); 
   });
   $('#NE01Building').click(function() {
       selectNE01(); 
   });

});*/

   /* group selection functions */
   function selectGroup() {

       $('area').bind('mouseover', function () {
           console.log("test")
           $('img').mapster('tooltip');
       });
       $('img').mapster(initial_opts)
           .mapster('set', true, 'NE01,NE04,NE03,NE12,NE09,NE10', {
               fill: true,
               fillColor: '00ff00'
           }, function() {
            console.log("test")
           })
           .mapster('snapshot')
           .mapster('rebind', basic_opts);
       $('#NE01,#NE04,#NE03,#NE12,#NE09,#NE10').bind('mouseover', function () {
           $('img').mapster('tooltip', this, $(this).attr('full'));
       });

   }

   function selectNE01() {
       $('area').bind('mouseover', function () {
           $('img').mapster('tooltip');
       });
       $('img').mapster(initial_opts)
           .mapster('set', true, 'NE01', {
               fill: true,
               fillColor: 'FF0000'
           })
           .mapster('snapshot')
           .mapster('rebind', basic_opts);
       $('#NE01').bind('mouseover', function () {
           $('img').mapster('tooltip', this, $(this).attr('full'));

       });
   }

   function selectSE() {
       $('area').bind('mouseover', function () {
           $('img').mapster('tooltip');
       });
       $('img').mapster(initial_opts)
           .mapster('set', true, 'SE06,SE16', {
               fill: true,
               fillColor: '800000'
           })
           .mapster('snapshot')
           .mapster('rebind', basic_opts);
       $('#SE06,#SE16').bind('mouseover', function () {
           $('img').mapster('tooltip', this, $(this).attr('full'));

       });
   }

   function selectSW() {
       $('area').bind('mouseover', function () {
           $('img').mapster('tooltip');
       });
       $('img').mapster(initial_opts)
           .mapster('set', true, 'SW09', {
               fill: true,
               fillColor: 'FFFF00'
           })
           .mapster('snapshot')
           .mapster('rebind', basic_opts);
       $('#SW09').bind('mouseover', function () {
           $('img').mapster('tooltip', this, $(this).attr('full'));

       });
   }

   function selectAllBusiness() {
       /*selects all business schools, disable for now*/
       /*
       $('img').mapster(initial_opts)
           .mapster('set',true,'NE01,NE04,NE03,NE12,NE09,NE10,SW09,SE06,SE16', {
               fill: true,
               fillColor: 'FFFF00'
           })
           .mapster('snapshot')
           //.mapster('rebind',basic_opts);
           $('area').bind('mouseover', function() {
             $('img').mapster('tooltip',this,$(this).attr('full'));
   
           });
           */
   }

   /* end group selection functions */

 