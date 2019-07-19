// Mensagem ao desenvolvedor que irá validar este teste.

// Deixei o ambiente corporativo em 2013 e desde então trabalho como autonomo com plataformas em php. Devido a isso deixei de me atualizar com algumas tecnologias. Perdi um pouco da onda de NodeJS, ES5, etc. vi poucas coisas e o pouco que vi apliquei aqui.
// Porém minha experiência com frontend e ux é enorme, aprendo com muita facilidade e se me permitirem a chance aprendo as novas tecnologias rápidinho.
// Não sei exatamente com qual framework a Venturus trabalha, mas por citarem "Vanilla JS" imagino que com todos.
// Obs: evitei o uso do jQuery, mas tenho grande experiência com o mesmo.

new Vue({
  el: '#app',
  data: {
    users: [],
    title:"Users",
},
created () {
    var vm = this
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        vm.users = response.data
    })
}
})


function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

document.getElementById('expand').addEventListener('click', function() {
    toggleClass(document.getElementById('bcrumb'), 'expand');
});