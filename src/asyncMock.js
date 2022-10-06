const products = [
    {
        id: '1',
        name: 'Remera manga corta',
        price: '1500',
        category: 'Indumentaria',
        img: 'https://apollo-virginia.akamaized.net/v1/files/px297b1luzyo1-AR/image;s=272x0',
        stock: 10,
        description: 'Remera usada'
    },
    {
        id: '2',
        name: 'Nokia 1100',
        price: '2500',
        category: 'Celulares',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg/1200px-Nadal_dzia%C5%82ajaca_Nokia_1100_%282018_rok%29_Zakupiona_w_2005_roku._Obecnie_obs%C5%82uguje_polsk%C4%85_sie%C4%87_Play.jpg',
        stock: 3,
        description: 'Nokia 1100'
    },
    {
        id: '3',
        name: 'Zapatillas Nike 42',
        price: '3500',
        category: 'Zapatillas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_992933-MLA51065256745_082022-W.jpg',
        stock: 5,
        description: 'Zapatilla usada'
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