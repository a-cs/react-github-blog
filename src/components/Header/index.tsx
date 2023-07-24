import { HeaderContainer } from './styles'
import logoImg from '../../assets/LogoWithTitle.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoImg} alt="" />
        </HeaderContainer>
    )
}
