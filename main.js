
$('.conteiner').click(function(e){ 
    e.preventDefault();
});

$('#submeter').click(function(){ 
    const nomeTarefa = $('#nomeTarefa').val();
    $(
        `<li>
        <button>FINALIZAR</button>
        <p>${nomeTarefa}</p>
        </li>`
    ).appendTo('ul');
    $('#nomeTarefa').val('');
    
    $('ul li button').click(function() {
        $(this).siblings('p').addClass('finalizado');
        $(this).css('background-color', '#4CAF50');
    });
    
});



