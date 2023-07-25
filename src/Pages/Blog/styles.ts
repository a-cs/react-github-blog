import { styled } from 'styled-components'

export const BlogContainer = styled.div`
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
        font-size: 1rem;
        font-weight: 400;
    }
`

export const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
