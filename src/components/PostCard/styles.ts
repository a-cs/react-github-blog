import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const PostCardContainer = styled.article`
    width: 26rem;
    height: 16.25rem;
`

export const LinkContainer = styled(Link)`
    text-decoration: none;
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

    p {
        max-height: 6.25rem;
        overflow: hidden;
        color: ${(props) => props.theme['base-text']};
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        display: -webkit-box;
    }
`

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    h3 {
        max-width: 16.5rem;
        color: ${(props) => props.theme['base-title']};
        font-size: 1.25rem;
        font-weight: 700;
    }

    span {
        margin-top: 0.3125rem;
        color: ${(props) => props.theme['base-span']};
        font-size: 0.875rem;
        font-style: normal;
    }
`
