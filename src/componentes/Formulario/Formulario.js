import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Fomulario.css";

const Formulario = () => {
  const times = [
    'Athletico-PR',
    'Atlético-GO',
    'Atlético-MG',
    'Bahia',
    'Botafogo',
    'Corinthians',
    'Criciúma',
    'Cruzeiro',
    'Cuiabá',
    'Flamengo',
    'Fluminense',
    'Fortaleza',
    'Grêmio',
    'Internacional',
    'Juventude',
    'Palmeiras',
    'Red Bull Bragantino',
    'São Paulo',
    'Vasco da Gama',
    'Vitória'
];

const Salvar = (evento) => {
  evento.preventDefault()
  console.log('Form foi submetido')
}

  return (
    <section className="formulario">
      <form onSubmit={Salvar}>
        <CampoTexto obrigatorio={true} label="Nome Jogador" placeholder="Digite o nome" />
        <CampoTexto obrigatorio={true} label="Posição" placeholder="Digite a posição" />
        <CampoTexto label="Imagem" placeholder="" />
        <ListaSuspensa obrigatorio={true} label="Times" itens={times}/>
        <Botao>
          Criar Card
        </Botao>

      </form>
    </section>
  );
};

export default Formulario;
