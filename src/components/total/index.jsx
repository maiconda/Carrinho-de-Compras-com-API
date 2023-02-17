import './style.css'

function Total(props){
    return(
        <div className="total-section">
            <div className='resumo'>
                <p>Resumo da compra</p>
            </div>
            <div className='subtotal'>
                <p>Sub-total:</p>
                <p>{props.subtotal}</p>
            </div>
            <div>
                <p className='cupom-p'>
                    Adicionar cupom de desconto:
                </p>
            </div>
            <form className='cupom' onSubmit={props.getCupom}>
                <input placeholder='Digite seu cupom' htmlFor='cupom' type="text" name="" id="cupom-value" />
                <button >Adicionar Cupom</button>
            </form>
            <div className='desconto'>
                <p>Desconto:</p>
                <p>{props.desconto}</p>
            </div>
            <div className='total'>
                <p>Total:</p>
                <p>{props.total}</p>
            </div>
            <div className='button-random'>
                <button onClick={props.addProduct}>Adicionar produto aleatório</button>
            </div>
        </div>
    )
}

export default Total