let link_pesquisa = document.getElementById("link_pesquisa");

link_pesquisa.addEventListener('input', function() {

    const link = link_pesquisa.value; 

    if(link.includes(".com")){
        console.log(link)
    }

});


