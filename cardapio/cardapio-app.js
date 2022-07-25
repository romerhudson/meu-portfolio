const cardapio = [
    {
        id: 1,
        title: "smash burger",
        category: "hamburgers",
        price: 18,
        img: "./images/item-1.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id: 2,
        title: "cheese burger",
        category: "hamburgers",
        price: 22,
        img: "./images/item-2.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id: 3,
        title: "smash burger duplo",
        category: "hamburgers",
        price: 21,
        img: "./images/item-3.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id: 4,
        title: "batata frita",
        category: "acompanhamentos",
        price: 18,
        img: "./images/item-4.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id: 5,
        title: "mandioquinha frita",
        category: "acompanhamentos",
        price: 16,
        img: "./images/item-5.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id: 6,
        title: "onion rings",
        category: "acompanhamentos",
        price: 16,
        img: "./images/item-6.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id: 7,
        title: "coca-cola lata",
        category: "bebidas",
        price: 5,
        img: "./images/item-7.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id: 8,
        title: "suco valle lata",
        category: "bebidas",
        price: 5,
        img: "./images/item-8.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id: 9,
        title: "heineken longneck",
        category: "bebidas",
        price: 8,
        img: "./images/item-9.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
    {
        id:10,
        title: "brownie",
        category: "sobremesas",
        price: 10,
        img: "./images/item-10.png",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, ultricies et pretium efficitur, laoreet ac eros.`
    },
];

// seleções
const cardapioContainer = document.querySelector(".cardapio-container");
const botoesContainer = document.querySelector(".botoes-container");

// carregar itens
window.addEventListener("DOMContentLoaded", function () {
    mostrarCardapioItens(cardapio);
    const categorias = cardapio.reduce(function(acc, el) {
        if(!acc.includes(el.category)) {
            acc.push(el.category);
        }
        return acc;
    }, ["todos"]);
    const botoesCategorias = categorias.map(function(category) {
        return `
            <button class="botao-filtro" type="button" data-id=${category}>${category}</button>
        `
    }).join("");
    botoesContainer.innerHTML = botoesCategorias
    const botaoFiltro = document.querySelectorAll(".botao-filtro");
    // filtrar itens
    botaoFiltro.forEach(function (botao) {
        botao.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.id;
            const cardapioCategoria = cardapio.filter(function(cardapioItem) {
                if(cardapioItem.category === category) {
                    return cardapioItem;
                }
            });
            if(category === "todos") {
                mostrarCardapioItens(cardapio)
            }
            else {
                mostrarCardapioItens(cardapioCategoria)
            }
        });
});
});

function mostrarCardapioItens(cardapioItens) {
    let mostrarCardapio = cardapioItens.map(function (item) {
        return `
        <article class="cardapio-item">
            <img src=${item.img} alt=${item.title}>
            <div class="item-info">
                <header>
                    <h3 class="item-titulo">${item.title}</h3>
                    <h3 class="item-preco">R$ ${item.price}</h3>
                </header>
                <p>${item.desc}</p>
            </div>
         </article>
        `;
    });
    mostrarCardapio = mostrarCardapio.join("");
    cardapioContainer.innerHTML = mostrarCardapio;
}