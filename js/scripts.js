$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var bizType = $("input:radio[name=bizType]:checked").val();
    var personality = $("input:radio[name=personality]:checked").val();
    var frontBack = $("input:radio[name=frontBack]:checked").val();
    var lengthOfStay = $("input:radio[name=lengthOfStay]:checked").val();
    var codeVisual = $("input:radio[name=codeVisual]:checked").val();
    var webMobile = $("input:radio[name=webMobile]:checked").val();

//      The following are the paramaters defined for the C# track

//      bizType === corporate
//      personality === traditional
//      frontBack === backend
//      lengthOfStay === long
//      codeVisual === coding
//      webMobile === n/a

        if (bizType === "corporate" && personality === "traditional" && frontBack === "backend" ||
            bizType === "corporate" && personality === "traditional" && lengthOfStay === "long" ||
            bizType === "corporate" && personality === "traditional" && codeVisual === "coding" ||
            personality === "traditional" && frontBack === "backend" && lengthOfStay === "long" ||
            personality === "traditional" && frontBack === "backend" && codeVisual === "coding" ||
            frontBack === "backend" && lengthOfStay === "long" &&  codeVisual === "coding" ) {

            $('#cSharp').show();
            $('#ruby').hide();
            $('css').hide();
            $('#twoOptions').hide();;

//      End of C# track suggestion branch
//
//      ---------------------------------
//
//      The following are parameters defined for the Ruby-Rails track
//
//      bizType === startup
//      personality === progressive
//      frontBack === backend
//      lengthOfStay === flexible
//      codeVisual === coding
//      webMobile === mobileApps


} else  if (bizType === "startup" && personality === "progressive" && frontBack === "backend" ||
            bizType === "startup" && personality === "progressive" && lengthOfStay === "flexible" ||
            bizType === "startup" && personality === "progressive" && codeVisual === "coding" ||
            bizType === "startup" && personality === "progressive" && webMobile === "mobileApps"
            personality === "progressive" && frontBack === "backend" && lengthOfStay === "flexible" ||
            personality === "progressive" && frontBack === "backend" && codeVisual === "coding" ||
            personality === "progressive" && frontBack === "backend" && webMobile === "mobileApps"  ||
            frontBack === "backend" && lengthOfStay === "flexible" &&  codeVisual === "coding" ||
            frontBack === "backend" && lengthOfStay === "flexible" &&  webMobile === "mobileApps"  ||
            lengthOfStay === "flexible" &&  codeVisual === "coding" && webMobile === "mobileApps" ||
            ) {

            $('#ruby').show();
            $('#cSharp').hide();
            $('css').hide();
            $('#twoOptions').hide();;
//      End of Ruby track suggestion branch
//
//      ---------------------------------
//
//      The following are parameters defined for the CSS-Design track
//
//      frontBack === frontend
//      codeVisual === visualDesign


    } else if (frontBack === "frontEnd" || codeVisual === "visualDesign") {
      $('#css').show();
      $('#cSharp').hide();
      $('#ruby').hide();;
      $('#twoOptions').hide();;
    } else {
      $('#twoOptions').show();
      $('#css').hide();
      $('#cSharp').hide();
      $('#ruby').hide();;
    }
  });
});
