function whats(){
    const nEncode = 'MTE5NTk3NjgzMDE='
    const number = atob(nEncode)
    const link ='https://wa.me/' + number
    window.open(link)
}

//fade para os projetos em jquery
$('.box-cards').hide();

$('#btn-projetos').click(function(){
    $('.box-cards').fadeToggle(1000);
});