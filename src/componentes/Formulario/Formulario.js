import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Fomulario.css";

const Formulario = (props) => {

const [nome, setNome] = useState('')
const [imagem, setImagem] = useState('')
const [posicao, setPosicao] = useState('')
const [time, setTime] = useState('')

const aoSalvar = (evento) => {
  evento.preventDefault()
  props.aoJogadorCadastrado({
    nome, 
    imagem, 
    posicao, 
    time
  })
  setNome('')
  setPosicao('')
  setImagem('')
  setTime('')
}

  return (
    <section className="formulario">
      
      <form onSubmit={aoSalvar}>
        <h2>Preencha para criar o Jogador</h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome Jogador" 
          placeholder="Digite o nome"
          valor={nome}
          alterado = {valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Posição" 
          placeholder="Digite a posição" 
          valor={posicao}
          alterado = {valor => setPosicao(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Digite a url da imagem"
          valor={imagem}
          alterado = {valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Times" 
          itens={props.times}
          valor={time}
          alterado = {valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>

      </form>
    </section>
  );
};

export default Formulario;
