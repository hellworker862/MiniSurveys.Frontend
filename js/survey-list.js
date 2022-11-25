$('input[name=isActive]').change(function() {
    $.ajax({
        type: "GET",
        url: "/Survey/SurveyListPartial",
        data: {
            isActive: $('input[name=isActive]:checked').val(),
            stringSearch: $('#search').val(),
        },
        success: function(html) {
            console.log(html)
        }
    });
});