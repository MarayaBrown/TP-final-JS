const main = document.querySelector('#articulos')
const info = []
localStorage.removeItem("infoUsuario");

async function get() {
    try {
        let response = await fetch('articulos.json')
        if (response.ok) {
            let data = await response.json()
            console.log(response);
            console.log(data);     
            html(data) 
            solicitarInfo(data)     
        }else{
            new Error('Error en la solicitud'+ response.statusText)
        }
        
    } catch (error) {
        alert(error.message)
    }
}
const html = (arr) => {
    arr.forEach(element => {
        let {producto, descripcion, id} = element
        main.innerHTML += `
                    <div class='cardProduct'>
                        <h2>${producto}</h2>                        
                        <p>${descripcion}</p>
                        <button class='btn' id=${id}>Ver mas información</button>
                    </div>        
                    `   
    });
}

const solicitarInfo = (data) => {
    let botones = document.querySelectorAll('.btn')
    console.log(botones);
    for (const btn of botones) {
        btn.addEventListener('click', (evento) => {
            console.log(evento.target.id);
            let resultado = data.find( el => el.id == evento.target.id)
            console.log(resultado);
            if (resultado == undefined){
                alert('ocurrio un error')
            }else{
                info.push(resultado)
                localStorage.setItem('infoUsuario',JSON.stringify(info))
                console.log(info);
                window.open('articulo.html',"_self");
            }
        })
        
    }
}
get()









