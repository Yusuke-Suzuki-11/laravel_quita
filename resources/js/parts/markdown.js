import marked from "marked";

$(function() {
    marked.setOptions({
        langPrefix: "",
        breaks: true,
        sanitize: true
    });

    $("#markdown_editor_textarea").keyup(function() {
        var html = marked(getHtml($(this).val()));
        $("#markdown_preview").html(html);
    });

    var target = $(".item-body");
    var html = marked(getHtml(target.html()));
    $(".item-body").html(html);

    function getHtml(html) {
        html = html.replace(/</g, "<");
        html = html.replace(/>/g, ">");
        html = html.replace(/&/g, "&");
        return html;
    }
});
