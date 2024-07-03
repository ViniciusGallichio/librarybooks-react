import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'
 
const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 105%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 100%;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 50px;
`

const LivroContainer = styled.div`
    cursor: pointer;
    display: inline-block;
    margin-right: 20px;
    z-index: 2;

    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa(){

    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    console.log(livrosPesquisados)

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura" 
            onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}/>

            {livrosPesquisados.map(livro => (
                <LivroContainer>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt='Capa do livro'></img>             
                </LivroContainer>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa