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
        } else if (e.data == 'iloaded') {
            $('#loadingRipple').hide();
            $('#myFrame').show();
        }
    });

    browser.tabs.query({active: true, currentWindow: true}).then(function (tabs) {
        //'tabs' will be an array with only one element: an Object describing the active tab
        //  in the current window.
        var currentTabUrl = tabs[0].url;

        $('<svg id="loadingRipple" width="700px" height="300px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ripple"><circle cx="50" cy="50" r="0" fill="none" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-width="{{config.width}}" stroke="#182731" stroke-width="2"><animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1" keySplines="0 0.2 0.8 1" begin="-0.5s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1" keySplines="0.2 0 0.8 1" begin="-0.5s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="50" r="0" fill="none" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-width="{{config.width}}" stroke="#a7d4ec" stroke-width="2"><animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"></animate></circle></svg>').appendTo('#main_div');

        $('<iframe />');
        $('<iframe />', {
            src: 'https://cuneiphrase.xyz/popup.php?url=' + currentTabUrl,
            id: 'myFrame',
            style: 'display:none;',
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
