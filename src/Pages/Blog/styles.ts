import { styled } from 'styled-components'

export const BlogContainer = styled.div`
    min-height: 100vh;
    max-width: 54rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AuthorInfo = styled.div`
    margin-top: -5.5rem;
    padding: 2rem 2rem 2rem 2.5rem;
    flex-shrink: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    background: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

    img {
        width: 9.25rem;
        height: 9.25rem;
        flex-shrink: 0;
        border-radius: 8px;
        margin-right: 2rem;
    }

    h2 {
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
    }
`

export const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const TopContainer = styled.div`
    margin: 0.5rem 0;
    width: 100%;
    height: 1.9375rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
        font-size: 1.5rem;
    }
`

export const BottomContainer = styled.div`
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 1.5rem;
    h1 {
        font-size: 1.5rem;
    }
`

export const PostListHeader = styled.div`
    margin-top: 4.5rem;
    width: 100%;
`

export const PostListTopContainer = styled.div`
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

interface MessageContainerProps {
    isError: boolean
}

export const MessageContainer = styled.div<MessageContainerProps>`
    margin-top: 3rem;
    border-radius: 8px;
    box-shadow: 0 0 0 2px
        ${(props) => (!props.isError ? props.theme.blue : '#dd2323')};
    padding: 0.75rem 1rem;
    transition: 0.2s;

    p {
        color: ${(props) =>
            !props.isError ? props.theme['base-subtitle'] : props.theme.white};
        font-size: 1.125rem;
        font-weight: 700;
    }
`
