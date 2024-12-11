import Card from '../Card/Card'
import './Time.css'

const Time = (props) =>{

    const css = {backgroundColor: props.corSecundaria}

    return(
        (props.jogadores.length > 0) ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria, color: props.corFonte}}>{props.time}</h3>
            <div className='jogadores'>
                 {props.jogadores.map(jogador => <Card corFundo={props.corPrimaria} corLetra={props.corPrimaria} key={jogador.nome} nome={jogador.nome} posicao={jogador.posicao} imagem={jogador.imagem} />)}    
            </div>
            
        </section>
        :''
    )

}

export default Time