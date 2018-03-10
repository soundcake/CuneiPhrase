$(document).ready(function () {
    //alert('and now jquery is working');
    //$('body').css({'font-family':''});

    //CSS TO BE APPLIED FOR THE EASTER EGG
    /*
    $("head").prepend("<style type=\"text/css\">" +
        "@font-face {\n" +
        "\tfont-family: \"Behistun\";\n" +
        "\tsrc: url('http://www.cuneiphrase.xyz/fonts/Behistun.otf') format('opentype');\n" +
        "}\n" +
        "\tbody p {\n" +
        "\tfont-family: \"Behistun\" !important;\n" +
        "\tcolor: red !important;\n" +
        "}\n" +
        "</style>");
    */
    browser.tabs.query({active: true, currentWindow: true}).then(function (tabs) {
        //'tabs' will be an array with only one element: an Object describing the active tab
        //  in the current window.
        var currentTabUrl = tabs[0].url;
        $('<iframe />');
        $('<iframe />', {
            src: 'https://cuneiphrase.xyz/popup.php?url=' + currentTabUrl,
            id: 'myFrame',
            frameborder: 0,
            scrolling: 'no'
        }).appendTo('#main_div');
    });


    //alert(currentUrl);


    //alert('test');

    //alert('it works');
});
