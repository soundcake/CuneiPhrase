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

    function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener){
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }

    bindEvent(window, 'message', function (e) {
        console.log(e.data);
        if (e.data == 'fontme') {
            function onExecuted(result) {
                // console.log(`done`);
                return true;
            }

            function onError(error) {
                console.log(`Error: ${error}`);
            }

            var doFontStuff = 'var elem = document.createElement("link");' +
                'elem.href = "https://cuneiphrase.xyz/fonts/font.css";' +
                'elem.rel = "stylesheet";' +
                'elem.type = "text/css";' +
                'document.head.appendChild(elem);';

            var executing = browser.tabs.executeScript({
                code: doFontStuff
            });
        }
    });

    browser.tabs.query({active: true, currentWindow: true}).then(function (tabs) {
        //'tabs' will be an array with only one element: an Object describing the active tab
        //  in the current window.
        var currentTabUrl = tabs[0].url;
        $('<iframe />');
        $('<iframe />', {
            src: 'https://cuneiphrase.xyz/popup.php?url=' + currentTabUrl,
            id: 'myFrame',
            frameborder: 0
        }).appendTo('#main_div');

        $("#showAdd").on("click", function () {
            $.post('https://cuneiphrase.xyz/addlink.php', {
                link: 'https://www.w3schools.com/tags/tag_button.asp',
                title: 'Tag button usage'
            });
        });
    });


    //alert(currentUrl);


    //alert('test');

    //alert('it works');
});
