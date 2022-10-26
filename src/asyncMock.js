const products = [
    {
        id: '1',
        name: 'Remera manga corta',
        price: 1500,
        category: 'Indumentaria',
        img: 'https://apollo-virginia.akamaized.net/v1/files/px297b1luzyo1-AR/image;s=272x0',
        stock: 10,
        description: 'Remera usada'
    },
    {
        id: '2',
        name: 'Nokia 1100',
        price: 2500,
        category: 'Celulares',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg/1200px-Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg',
        stock: 3,
        description: 'Nokia 1100'
    },
    {
        id: '3',
        name: 'Zapatillas Nike 42',
        price: 3500,
        category: 'Zapatillas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_992933-MLA51065256745_082022-W.jpg',
        stock: 5,
        description: 'Zapatilla usada'
    },
    {
        id: '4',
        name: 'Sony XPeria A1',
        price: 58000,
        category: 'Celulares',
        img: 'https://el-salvador.tiendacelular.com/oc-content/uploads/903/1626476.jpg',
        stock: 2,
        description: '2 años de uso, estado como nuevo'
    },
    {
        id: '5',
        name: 'Iphone 11 pro max',
        price: 218000,
        category: 'Celulares',
        img: 'https://http2.mlstatic.com/D_NQ_NP_976221-MLA51413252946_092022-V.jpg',
        stock: 1,
        description: '1 años de uso, estado como nuevo, bateria el 90%'
    },
    {
        id: '6',
        name: 'Camiseta Seleccion Mundial 90',
        price: 12000,
        category: 'Indumentaria',
        img: 'https://www.diariosintesis.com.ar/images/2017/11/06/camisetaargentina1990.jpg',
        stock: 2,
        description: 'Copia +AAA, NUEVA!'
    }
]

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products);
        },1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products.filter((prod) => prod.category === categoryId))
        },1000);
    });
};
 
    export const getProductById = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find((prod) => prod.id === id))
            }, 500);
        });
};