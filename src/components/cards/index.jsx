import './style.css'

function Cards(props){
    return(
        <div className="card-div">
            <img src={props.img_url} alt="" />
            <div className='card-data'>
                <h3>{props.name}</h3>
                <p className='preco'>Preço: {props.price}</p>
                <div className='quant-button'>
                    <div className='quant'>
                        <span onClick={props.removeQuantity} className='menos'>-</span>
                        <p>{props.quantity}</p>
                        <span onClick={props.addQuantity}className='mais'>+</span>
                    </div>
                    <button onClick={props.removeProduct}>Remover</button>
                </div>
            </div>
        </div>
    )
}

export default Cards