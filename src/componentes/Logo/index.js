import logo from '../../imagens/React-icon.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-right: 40px;
`
const LogoImg = styled.img`
    margin-right: 10px;
    margin-left: 5px;
    max-width: 60px;

    @media (prefers-reduced-motion: no-preference){
        animation: App-logo-spin infinite 20s linear;
    }
    
    @keyframes App-logo-spin { 
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }
`

function Logo(){
    return(

        <LogoContainer>
            <LogoImg src={logo} alt='Logotipo'></LogoImg>
            <p><strong>Vini</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;