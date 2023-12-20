$(document).ready(function () {
    $("header button").click(function () {
        $("form").slideDown();
    });

    $("#btn-cancel").click(function () {
        $("form").slideUp();
    });

    $("form").on("submit", function (e) {
        e.preventDefault();
        const newImgUrl = $('#new-img-url').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${newImgUrl}" />`).appendTo(newItem);
        $(`
        <div class ="overlay-img-link">
            <a href="${newImgUrl}" target="_blank" title="See image in real size">
                See image in real size
            </a>
        </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(500);
        $('#newImgUrl').val('')
    });
});
