import { styled } from 'styled-components'

export const IconLabelContainer = styled.div`
    height: 1.1875rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-label']};
    font-size: 1.125rem;

    p {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
    }
`
