import Header from "../components/header"
import Cards from "../components/cards"
import React , {Fragment, useEffect, useState} from "react"
import Total from "../components/total"
import './style.css'
import {api} from '../provider'




function Home(){
    const [cart, setCart] = useState([])
    
    const getProducts = () => {
        api.get('/cart').then((res) => {
            setCart(res.data)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    let products = [
        {
            name: 'Placa Gráfica Nvidia RTX 2070',
            price: 2000,
            img_url: 'https://s2.glbimg.com/uHVStRNa_eX1QHX9B20ISezso2g=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/0/A/uStJ1tT6WTZqFvXCFlwg/2060.jpg',
            quantity: 1
        }, 
        {
            name: 'Placa Gráfica Nvidia RTX 3080',
            price: 5500,
            img_url: 'https://assets.reedpopcdn.com/-1599756031401.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1599756031401.jpg',
            quantity: 1
        },
        {
            name: 'Processador Intel Core i9 13900k',
            price: 4200,
            img_url: 'https://t.ctcdn.com.br/dB2vpViOgrlrmyF3cuyQdJu9-5c=/512x288/smart/filters:format(webp)/i522862.jpeg',
            quantity: 1
        },
        {
            name: 'Teclado Razer BlackWidow V3 Tenkeyless',
            price: 950,
            img_url: 'https://assets2.razerzone.com/images/pnx.assets/f83991a174978c3f88c089758ea9fa3c/blackwidow-v3-tenkeyless-usp1-mobile-v2.jpg',
            quantity: 1
        },
        {
            name: 'Monitor Samsung Odyssey G9',
            price: 5000,
            img_url: 'https://sm.ign.com/ign_br/screenshot/default/blob_e7a1.jpg',
            quantity: 1
        },
        {
            name: 'IPhone 13s Pro Max',
            price: 5000,
            img_url: 'https://t2.tudocdn.net/590582?w=646&h=284',
            quantity: 1
        },
        {
            name: 'IPhone 6s',
            price: 700,
            img_url: 'https://i.pcmag.com/imagery/articles/00UFGssMaiILePzrFXVxgPj-11.fit_lim.v1569489156.jpg',
            quantity: 1
        },
        {
            name: 'Notebook Dell inspiron 15 I1101',
            price: 6400,
            img_url: 'https://t.ctcdn.com.br/3fSYk6ZWSBl4n4ff7acD0sGYfBc=/512x288/smart/filters:format(webp)/i521599.png',
            quantity: 1
        },
        {
            name: 'Mouse Redragon King Cobra 2',
            price: 450,
            img_url: 'https://static.wixstatic.com/media/71a6c2_5607dec8c2ba49cfba12a7eff9b41272~mv2.png/v1/fill/w_1283,h_850,al_c,q_90,enc_auto/71a6c2_5607dec8c2ba49cfba12a7eff9b41272~mv2.png',
            quantity: 1
        },
        {
            name: 'Mouse Razer Naga Pro',
            price: 780,
            img_url: 'https://assets2.razerzone.com/images/pnx.assets/27f10b20fde0378b5062b2661a55b809/razer-naga-pro-2020-usp-hyperspeed-wireless-mobile.jpg',
            quantity: 1
        },
        {
            name: 'Processador AMD Ryzer 5 7600X',
            price: 1000,
            img_url: 'https://adrenaline.com.br/uploads/chamadas/amd-ryzen-5-7600x-geekbench_(2).jpg',
            quantity: 1
        },
        {
            name: 'Gabinete Redragon Strafe Infernal',
            price: 750,
            img_url: 'https://epicgeek.com.br/wp-content/uploads/2021/02/Redragon-Infernal-Dragon-Strafe.jpg',
            quantity: 1
        },
        {
            name: 'Water Cooler Corsair Hydro Series',
            price: 800,
            img_url: 'https://conectiva.com.br/wp-content/uploads/2021/10/melhores-water-cooler.jpg',
            quantity: 1
        },
        {
            name: 'Razer BlackShark V2',
            price: 1200,
            img_url: 'https://assets2.razerzone.com/images/pnx.assets/1d90fb0fb09996eb2a6ed1878b1a42df/razer-blackshark-v2-2020-hero-mobile.jpg',
            quantity: 1
        },
        {
            name: 'MousePad Corsar MM700 RGB',
            price: 420,
            img_url: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453152cv27d.jpg',
            quantity: 1
        },
        {
            name: 'Cadeira DxRacer King Gaming',
            price: 1700,
            img_url: 'https://preview.free3d.com/img/2018/07/2202375739687306838/bsiwkoz7.jpg',
            quantity: 1
        },
        {
            name: 'Cadeira Pichau RGB',
            price: 1200,
            img_url: 'https://cdn-62cb22a2c1ac1835ecef9f37.closte.com/wp-content/uploads/2022/11/Design-sem-nome-1024x576.png',
            quantity: 1
        },
        {
            name: 'Controle Razer Raiju',
            price: 1000,
            img_url: 'https://http2.mlstatic.com/D_NQ_NP_609009-MLB27572129937_062018-O.jpg',
            quantity: 1
        },
        {
            name: 'Pro Controller Xbox Elite',
            price: 1000,
            img_url: 'https://assets.xboxservices.com/assets/0a/f7/0af77a7b-c7ad-4dc9-a483-ffa6f47da869.jpg?n=999666_Hero-Image-1084_1920x831.jpg',
            quantity: 1
        },
        {
            name: 'Placa Mãe Aorus Z590',
            price: 1270,
            img_url: 'https://s.zst.com.br/cms-assets/2021/07/placa-m-e-gamer-gigabyte-z590-aorus-elite-ax-1-.png',
            quantity: 1
        }
    ]

    const addProduct = () => {
        let randomNum = Math.floor(Math.random() * 18)
        api.post('/cart', products[randomNum]).then(getProducts(),getProducts())
    }

    const removeProduct = (id) => {
        api.delete(`/cart/${id}`).then((res) => {
            getProducts()
            getProducts()
        })
    }

    const updateProduct = (item, operation) => {
        let newQuantity = item.quantity

        if (operation === 'add') {
            newQuantity += 1
        }
        if (operation === 'remove') {
            if (item.quantity > 1) {
                newQuantity -= 1
            } else {
                return
            }
        }

        api.put(`cart/${item.id}`, {...item, quantity: newQuantity}).then(() => {
            getProducts()
            getProducts()
        })

    }

    const getTotal = () => {
        let sum = 0
        cart.forEach(element => {
            sum += element.price * element.quantity
        });

        return sum
    }

    const cupons = [
        
        {
            name: 'MAICON10',
            desconto: 0.10
        },
        {
            name: 'API15',
            desconto: 0.15
        },
        {
            name: 'CART5',
            desconto: 0.5
        },
        {
            name: 'CUPOM20',
            desconto: 0.20
        },
        {
            name: 'PROMO30',
            desconto: 0.30
        }
    ]

    let [desconto, setDesconto] = useState(0)

    const getCupom = (e) => {
        e.preventDefault()
        cupons.forEach(element => {
            if (element.name === document.getElementById('cupom-value').value.toUpperCase()) {
                setDesconto(element.desconto)
            }
        });
    }

    return(
    <Fragment>
        <Header/>
        <main>
            <h2>Seu Carrinho</h2>

            {cart.length === 0 && <div id="" className="placeholder"><p>Carrinho de compras vazio</p></div>}

            <section className="cards-div">
                <div className="cards">


                    {cart.map ((item, index) => (
                        <Cards 
                        key={index} 
                        name={item.name}
                        price={item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        img_url={item.img_url}
                        removeProduct={() => removeProduct(item.id)}
                        quantity={item.quantity}
                        removeQuantity={() => updateProduct(item,'remove')}
                        addQuantity={() => updateProduct(item,'add')}/>
                    ))}
                </div>
                <Total addProduct={addProduct}
                subtotal={getTotal().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                getCupom={getCupom}
                desconto={(desconto * getTotal()).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                total={(getTotal() - (desconto * getTotal())).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
            </section>
        </main>
    </Fragment>
    )
}

export default Home