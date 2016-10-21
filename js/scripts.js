debugger;

$(document).ready(function() {
  $("form#survey").submit(function() {

    var biztype = $("input:radio[name=biztype]:checked").val();
    var personality = $("input:radio[name=personality]:checked").val();
    var frontback = $("input:radio[name=frontback]:checked").val();
    var lengthofstay = $("input:radio[name=lengthofstay]:checked").val();
    var codevisual = $("input:radio[name=codevisual]:checked").val();
    var webmobile = $("input:radio[name=webmobile]:checked").val();

    if (biztype === "corporate" && personality === "traditional" && frontback === "backend" ||
        biztype === "corporate" && personality === "traditional" && lengthofstay === "long" ||
        biztype === "corporate" && personality === "traditional" && codevisual === "coding" ||
        personality === "traditional" && frontback === "backend" && lengthofstay === "long" ||
        personality === "traditional" && frontback === "backend" && codevisual === "coding" ||
        frontback === "backend" && lengthofstay === "long" &&  codevisual === "coding") {

        $('#cSharp').show();
        $('#ruby').hide();
        $('css').hide();
        $('#twoOptions').hide();

    } else if (biztype === "startup" && personality === "progressive" && frontback === "backend" ||
        biztype === "startup" && personality === "progressive" && lengthofStay === "flexible" ||
        biztype === "startup" && personality === "progressive" && codeVisual === "coding" ||
        biztype === "startup" && personality === "progressive" && webMobile === "mobileApps" ||
        personality === "progressive" && frontback === "backend" && lengthofstay === "flexible" ||
        personality === "progressive" && frontback === "backend" && codevisual === "coding" ||
        personality === "progressive" && frontback === "backend" && webmobile === "mobileApps" ||
        frontback === "backend" && lengthofstay === "flexible" &&  codevisual === "coding" ||
        frontback === "backend" && lengthofstay === "flexible" &&  webmobile === "mobileApps"  ||
        lengthofstay === "flexible" &&  codevisual === "coding" && webmobile === "mobileApps") {

        $('#ruby').show();
        $('#cSharp').hide();
        $('css').hide();
        $('#twoOptions').hide();

    } else if (frontBack === "frontend" || codeVisual === "visualdesign") {

        $('#css').show();
        $('#cSharp').hide();
        $('#ruby').hide();
        $('#twoOptions').hide();

    } else {

        $('#twoOptions').show();
        $('#css').hide();
        $('#cSharp').hide();
        $('#ruby').hide();
    }

    event.preventDefault();
  });
});
