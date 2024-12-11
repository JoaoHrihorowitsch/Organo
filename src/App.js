import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Times/Time';

function App() {

  const times = [
    {
      nome:'Athletico-PR',
      corPrimaria:'#D60000',
      corSecundaria:'#000000',
      corFonte:'#ffffff'
    },
    {
      nome:'Atlético-GO',
      corPrimaria:'#E30613',
      corSecundaria:'#000000',
      corFonte:'#ffffff'
    },
    {
      nome:'Atlético-MG',
      corPrimaria:'#000000',
      corSecundaria:'#FFFFFF'
    },
    {
      nome:'Bahia',
      corPrimaria:'#006AB6',
      corSecundaria:'#D40000',
      corFonte:'#ffffff'
    },
    {
      nome:'Botafogo',
      corPrimaria:'#ffffff',
      corSecundaria:'#000000',
      corFonte:'#ffffff'
    },
    {
      nome:'Corinthians',
      corPrimaria:'#000000',
      corSecundaria:'#FFFFFF'
    },
    {
      nome:'Criciúma',
      corPrimaria:'#000000',
      corSecundaria:'#F9D61D'
  
    },
    {
      nome:'Cruzeiro',
      corPrimaria:'#FFFFFF',
      corSecundaria:'#2F529E',
      corFonte:'#ffffff'
    },
    {
      nome:'Cuiabá',
      corPrimaria:'#1C5C1A',
      corSecundaria:'#FFB916',
      corFonte:'#ffffff'
    },
    {
      nome:'Flamengo',
      corPrimaria:'#000000',
      corSecundaria:'#E30613',
    },
    {
      nome:'Fluminense',
      corPrimaria:' #9c2a2a',
      corSecundaria:'#006747',
      corFonte:'#ffffff'
    },
    {
      nome:'Fortaleza',
      corPrimaria:'#003B73',
      corSecundaria:'#D40000',
      corFonte:'#ffffff'
    },
    {
      nome:'Grêmio',
      corPrimaria:'#000000',
      corSecundaria:'#0d80bf',
      corFonte:'#ffffff'
    },
    {
      nome:'Internacional',
      corPrimaria:'#D50032',
      corSecundaria:'#FFFFFF'
    },
    {
      nome:'Juventude',
      corPrimaria:'#009639',
      corSecundaria:'#FFFFFF'
    },
    {
      nome:'Palmeiras',
      corPrimaria:'#ffffff',
      corSecundaria:'#006747',
      corFonte:'#ffffff'
    },
    {
      nome:'Red Bull Bragantino',
      corPrimaria:'#F05A28',
      corSecundaria:'#FFFFFF'
    },
    {
      nome:'São Paulo',
      corPrimaria:'#E30613',
      corSecundaria:'#FFFFFF',
    },
    {
      nome:'Vasco da Gama',
      corPrimaria:'#000000',
      corSecundaria:'#FFFFFF'
    },
    {
      nome:'Vitória',
      corPrimaria:'#E30613',
      corSecundaria:'#000000',
      corFonte:'#ffffff'
    },
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
    console.log(jogador)
  }


  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {times.map(time => <Time 
          key={time.nome} 
          time={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          corFonte={time.corFonte}
          jogadores={jogadores.filter(jogador => jogador.time == time.nome)}  
        />)}
      
    </div>
  );
}

export default App;
