

$(document).ready(function() {

    $('.tab').hide()
    $('#tab_index').show()
    $('#back').hide()

    function switchtab(name) {
        if (name == 'index') { $('#back').fadeOut(200) }

        $('.tab').fadeOut(200)
        $('#tab_' + name).fadeIn(200)
        if ((name) != 'index') { $('#back').fadeIn(200) }
    }

    $('#button_about').click(function() {
        switchtab('about')
    })

    $('#back').click(function() {
        switchtab('index')
    })
    
});