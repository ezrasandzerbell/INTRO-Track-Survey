$(document).ready(function() {

console.log();

  $("form#survey").submit(function(event) {

    var biztype = $("input:radio[name=biztype]:checked").val();
    var personality = $("input:radio[name=personality]:checked").val();
    var frontback = $("input:radio[name=frontback]:checked").val();
    var lengthofstay = $("input:radio[name=lengthofstay]:checked").val();
    var codevisual = $("input:radio[name=codevisual]:checked").val();
    var webmobile = $("input:radio[name=webmobile]:checked").val();

    if (frontback === "frontend" || codevisual === "visualdesign") {

        $('#css').show();
        $('#cSharp').hide();
        $('#ruby').hide();
        $('#twoOptions').hide();

    } else if (biztype === "corporate" && personality === "traditional" && frontback === "backend" ||
        biztype === "corporate" && personality === "traditional" && lengthofstay === "long" ||
        biztype === "corporate" && personality === "traditional" && codevisual === "coding" ||
        personality === "traditional" && frontback === "backend" && lengthofstay === "long" ||
        personality === "traditional" && frontback === "backend" && codevisual === "coding" ||
        frontback === "backend" && lengthofstay === "long" &&  codevisual === "coding") {

        $('#cSharp').show();
        $('#ruby').hide();
        $('#css').hide();
        $('#twoOptions').hide();

    } else if (biztype === "startup" && personality === "progressive" && frontback === "backend" ||
        biztype === "startup" && personality === "progressive" && lengthofstay === "flexible" ||
        biztype === "startup" && personality === "progressive" && codevisual === "coding" ||
        biztype === "startup" && personality === "progressive" && webmobile === "mobileapps" ||
        personality === "progressive" && frontback === "backend" && lengthofstay === "flexible" ||
        personality === "progressive" && frontback === "backend" && codevisual === "coding" ||
        personality === "progressive" && frontback === "backend" && webmobile === "mobileapps" ||
        frontback === "backend" && lengthofstay === "flexible" &&  codevisual === "coding" ||
        frontback === "backend" && lengthofstay === "flexible" &&  webmobile === "mobileapps"  ||
        lengthofstay === "flexible" &&  codevisual === "coding" && webmobile === "mobileapps") {

        $('#ruby').show();
        $('#cSharp').hide();
        $('#css').hide();
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
