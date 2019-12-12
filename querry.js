/* .prepend(), .html()  */

$(document).ready(function() {
    var textAdding = $('<b></b>').text('lorem');
    $('.toggle-hide').click(function() {
        $(this).toggleClass('clicked')
        $('button').addClass('clicked2')
    }); //Применение .ready(), .click(), .toggle(), .toggleClass()
    $('.toggle-hide').dblclick(function() {
        $(this).css({ 'background': 'rgb(0, 0, 0)' })
    }); //Применение .css()
    $('.toggle-fade').dblclick(function() {
        $('.fade').hide(300);
    }); //Применение hide
    $('.toggle-fade').click(function() {
        $('.fade').show(300);
    }); //Применение show
    $('.pchange').click(function() {
        $('body').find('p').addClass('active');
    }); //Применение .find() 
    $('.addAfter').click(function() {
        $('.text-change > article').append(textAdding);
    }); //Применение .append()
    $('.addBefore').click(function() {
        $('.text-change > article').prepend(textAdding);
    });
    $('.pfilter').click(function() {
        $('p').filter('.p-fade').addClass('active');
    }); //Применение .filter()
    $('.attribute').click(function() {
        alert($('li').attr('class'));
    }); //Применение .attr()
    $('input:first').click(function() {
        alert($('input:first').prop('disabled'));
    }); //Применение .prop()
    $('nav ul li').click(function() {
        $(this).find('ol').slideToggle(300);
    });
    $('.hideOls').click(function() {
        $('ol').trigger('click');
    }); //Применение .trigger()
    $('.wrapLis').click(function() {
        $('ul > li').wrap('<div class="wrapped"></div>')
    }); //Применение .wrap()
    $('.htmlLorem').click(function() {
        $('p').html('<b>Я новый текст</b>');
    });
});