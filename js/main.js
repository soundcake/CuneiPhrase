$(document).ready(function () {
    //alert('and now jquery is working');
    //$('body').css({'font-family':''});
    $("head").prepend("<style type=\"text/css\">" +
        "@font-face {\n" +
        "\tfont-family: \"Behistun\";\n" +
        "\tsrc: local('☺'), url('/../fonts/Behistun.otf') format('truetype');\n" +
        "}\n" +
        "\tbody p {\n" +
        "\tfont-family: Verdana !important;\n" +
        "\tfont-weight: bold !important;\n" +
        "\tfont-size: 300px !important;\n" +
        "\tcolor: red !important;\n" +
        "}\n" +
        "</style>");
});