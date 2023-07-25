import { styled } from 'styled-components'

export const PostCardContainer = styled.article`
    width: 26rem;
    height: 16.25rem;

    a {
        text-decoration: none;
    }
`

export const LinkContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.25rem;
    border-radius: 10px;
    background: ${(props) => props.theme['base-post']};
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
        border-radius: 10px;
        border-color: ${(props) => props.theme['base-label']};
    }

    &:active:focus {
        border-color: ${(props) => props.theme.blue};
    }
`

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    h3 {
        width: 16.5rem;
        color: ${(props) => props.theme['base-title']};
        font-size: 1.25rem;
        font-weight: 700;
    }

    span {
        width: 3.3125rem;
        margin-top: 0.3125rem;
        color: ${(props) => props.theme['base-span']};
        font-size: 0.875rem;
        font-style: normal;
    }
`

export const Content = styled.div`
    white-space: pre-wrap;
    max-height: 6.25rem;
    overflow: hidden;
    color: ${(props) => props.theme['base-text']};
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
`
