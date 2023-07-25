import { styled } from 'styled-components'

export const LinkContainer = styled.div`
    height: 1.1875rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;

    a {
        color: ${(props) => props.theme.blue};
        text-decoration: none;
    }
`
