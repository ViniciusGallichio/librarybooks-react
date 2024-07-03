import { livros } from './dadosUltLancamentos'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #C0C0C0;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding-top: 0px; 
    z-index: 1;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap; /* Adicionado para que os itens sejam envolvidos */
    justify-content: center;
    gap: 20px; /* Adicionado espaço entre os itens */
    height: auto;
`

const LivroImagem = styled.img`
    max-width: 100%; 
    height: auto;
    cursor: pointer;
`

function UltLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo>ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <LivroImagem src={livro.src}/> 
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltLancamentos