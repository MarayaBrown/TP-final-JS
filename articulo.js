class Info{
    constructor(items){
        this.items = items
    }

    htmlCode(){
        this.items.map(elemento => {
            document.querySelector('head').innerHTML+=`
                <title>${elemento.producto}</title>
            `
            document.querySelector('#informacion').innerHTML +=`
            <div class='cardProduct'>
                <h1>${elemento.producto}</h1>
                <p>${elemento.descripcion}</p>
                <p>${elemento.detalles}</p>
                <img src=${elemento.img} alt="">
                <p>Precio: $${elemento.precio}</p>
                <button><a href="index.html" class="button">Ver todos los productos</a></button>               
            </div>
            `

        })
    }
}

const arrayInfo = JSON.parse(localStorage.getItem('infoUsuario'))

const info = new Info(arrayInfo)
console.log(info);

info.htmlCode()
