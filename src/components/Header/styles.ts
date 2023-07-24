import { styled } from 'styled-components'
import coverImg from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;
    background-image: url(${coverImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
