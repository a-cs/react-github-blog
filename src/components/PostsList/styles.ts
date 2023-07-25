import { styled } from 'styled-components'

export const PostsListContainer = styled.main`
    margin-top: 4.5rem;
    margin-bottom: 14.625rem;
    width: 100%;
`

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.125rem;
        font-weight: 700;
    }

    h2 {
        color: ${(props) => props.theme['base-span']};
        font-size: 0.875rem;
        font-weight: 400;
    }
`

export const Input = styled.input`
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
        color: ${(props) => props.theme['base-label']};
    }

    &:focus {
        border-color: ${(props) => props.theme.blue};
    }
`

export const ListContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
`
