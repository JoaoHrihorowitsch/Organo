import './Card.css'

const Card = (props) => {
    return(
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: props.corFundo}}>
                <img src={props.imagem} alt={props.nome} ></img>
            </div>
            <div className='rodape'>
                <h4  style={{color: props.corLetra}}>{props.nome}</h4>
                <h5>{props.posicao}</h5>
            </div>
        </div>
    )
}

export default Card