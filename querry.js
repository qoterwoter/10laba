/*   .filter(), .attr(),
 .prop(), .trigger(), .wrap(), .prepend(), .append(), .html()  */

$(document).ready(function() {
    $('.toggle-hide').click(function() {
        $(this).toggleClass('clicked')
        $('button').addClass('clicked2')
    }); //Применение .ready(), .click(), .toggle(), .toggleClass()
    $('.toggle-hide').dblclick(function() {
        $(this).css({ 'background': 'rgb(0, 0, 0)' })
    }); //Применение .css()
    $('.toggle-fade').dblclick(function() {
        $('.fade').hide(300);
    });
    $('.toggle-fade').click(function() {
        $('.fade').show(300);
    });
    $('.pchange').click(function() {
        $('body').find('p').addClass('active');
    }); //Применение .find()
});
//Изменение текста
$(document).ready(function() {
    $('.addtext').click(function() {
        var textAdding = $('<b></b>').text('lorem');
        $('.text-change > article').append(textAdding);
    });
});