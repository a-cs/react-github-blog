import { HeaderContainer } from './styles'
import logoImg from '../../assets/LogoWithTitle.svg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <img src={logoImg} alt="" />
            </Link>
        </HeaderContainer>
    )
}
