$("#developer_note").css("margin-top", $("#topbar").height());
$('#collapsible').on('shown.bs.collapse', function () {
    $("#developer_note").css("margin-top", $("#topbar").height());
})
$('#collapsible').on('hidden.bs.collapse', function () {
    $("#developer_note").css("margin-top", $("#topbar").height());
})
function scrollTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
$('#linkTop').click(function(){scrollTop(); return false; });
let data = new Array();
function loadCemeteries() {
    $.getJSON('assets/cemeteries.json', function (json) {
        data = json.cemeteries;
    })
        .error(function() {
            console.log('error: JSON not loaded');
        })
        .done(function() {
            console.log( "JSON loaded!" );
            for (var i = 0; i < data.length; i++) {
                append(data[i])
            }
        });
}
loadCemeteries()
function append(cemetery) {
    $("#developer_note").append(
        "<div class=\"cards mx-auto mx-sm-auto mx-sm-4 m-4\" style=\"\">" +
        "<div class=\"flex-column d-inline-flex justify-content-center bg-light shadow overflow-hidden\" style=\"height: 18rem;width: 20rem;\">" +
        "<img src=\""+cemetery.image+"\"class=\"card-img-top m-0\" style=\"height: 12rem; width: 100%\">"+
        "<div class=\"p-2 flex-fill flex-grow-1 bd-highlight\">"+cemetery.name+"</div>" +
        "<div class=\"p-2 flex-fill flex-grow-1 bd-highlight mb-auto\">" +
        "<a href=\""+cemetery.link+" \" class=\"btn btn-primary\" >Текст кнопки</a>" +
        "</div>" +
        "</div>" +
        "</div>");
}
function filter(text, cemetery) {
    return cemetery.includes(text);
}
$(document).ready(function(){
    $("#searchBar").on("input", function(){
        $("#developer_note").html("");
        for (var i = 0; i < data.length; i++) {
            if(filter($(this).val().toLowerCase(), data[i].name.toLowerCase())){
                append(data[i])
            }
        }
    });
});