


$(document).ready(function() {
  $("form#test").submit(function() {

    var biztype = $("select#biztype").val();
    var personality = $("select#personality").val();
    var frontback = $("select#frontback").val();
    var lengthofstay = $("select#lengthofstay").val();
    var codevisual = $("select#codevisual").val();
    var webmobile = $("select#webmobile").val();


    if (biztype === 'corporate' && personality === 'traditional' && frontback === 'backend' ||
        biztype === 'corporate' && personality === 'traditional' && lengthofstay === 'long' ||
        biztype === 'corporate' && personality === 'traditional' && codevisual === 'coding' ||
        personality === 'traditional' && frontback === 'backend' && lengthofstay === 'long' ||
        personality === 'traditional' && frontback === 'backend' && codevisual === 'coding' ||
        frontback === 'backend' && lengthofstay === 'long' &&  codevisual === 'coding') {

        $('#cSharp').show();
        $('#ruby').hide();
        $('css').hide();
        $('#twoOptions').hide();

    } else if (biztype === 'startup' && personality === 'progressive' && frontback === 'backend' ||
        biztype === 'startup' && personality === 'progressive' && lengthofStay === 'flexible' ||
        biztype === 'startup' && personality === 'progressive' && codeVisual === 'coding' ||
        biztype === 'startup' && personality === 'progressive' && webMobile === 'mobileapps' ||
        personality === 'progressive' && frontback === 'backend' && lengthofstay === 'flexible' ||
        personality === 'progressive' && frontback === 'backend' && codevisual === 'coding' ||
        personality === 'progressive' && frontback === 'backend' && webmobile === 'mobileapps' ||
        frontback === 'backend' && lengthofstay === 'flexible' &&  codevisual === 'coding' ||
        frontback === 'backend' && lengthofstay === 'flexible' &&  webmobile === 'mobileapps'  ||
        lengthofstay === 'flexible' &&  codevisual === 'coding' && webmobile === 'mobileapps') {

        $('#ruby').show();
        $('#cSharp').hide();
        $('css').hide();
        $('#twoOptions').hide();

    } else if (frontBack === 'frontend' || codeVisual === 'visualdesign') {

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
