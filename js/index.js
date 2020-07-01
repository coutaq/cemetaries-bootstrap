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
$(".btn.btn-primary").click(function(){sendEmail(); return false; });
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
        "<a class=\"btn btn-primary\" data-toggle=\"modal\" href=#"+cemetery.link+" >Текст кнопки</a>" +
        "</div>" +
        "</div>" +
        "</div>");
    createModals(cemetery)
}
function createModals(cemetery) {
    $("#modals").append(
        "<div class=\"modal fade\" id="+cemetery.link+" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">"+
        "  <div class=\"modal-dialog\">"+
        "<div class=\"modal-content\">"+
        "<div class=\"modal-header\">"+
        " <h5 class=\"modal-title\" id=\"exampleModalLabel\">Заказать</h5>"+
        " <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">"+
        " <span aria-hidden=\"true\"></span>"+
         " </button>"+
        "  </div>"+
        "  <div class=\"modal-body d-flex justify-content-center border-bottom\">"+
        "  <img src=\""+cemetery.image+"\" class=\"img-fluid ml-auto\" alt=\"Responsive image\" style=\"width: 25%; height: 20%\">"+
        "  <h3 class=\"align-self-center pl-2 mr-auto\">"+cemetery.name+"</h3>"+
        "  </div>"+
        " <div class=\"modal-body d-flex justify-content-center flex-column\">"+
        " <h4 class=\"align-self-center mx-auto\">Информация:</h4>"+
        " <input id=\"info\" type=\"text\" class=\"form-control\" aria-describedby=\"inputGroup-sizing-sm\">"+
        " </div>"+
        "  <div class=\"modal-footer\">"+
        "  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Закрыть</button>"+
        "  <button id=\"sendInfo\" type=\"button\" class=\"btn btn-primary\">Отправить</button>"+
        "  </div>"+
        " </div>"+
        " </div>"+
        "  </div>"
    );
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