import { styled } from 'styled-components'

export const PostContainer = styled.div`
    max-width: 54rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostInfo = styled.div`
    margin-top: -5.5rem;
    padding: 2.5rem 2rem 2rem;
    flex-shrink: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

    h1 {
        margin-top: 1.25rem;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
    }
`

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BottomContainer = styled.div`
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 1.5rem;
    h1 {
        font-size: 1.5rem;
    }
`

export const Content = styled.div`
    white-space: pre-wrap;
    max-width: 100%;
    padding: 2.5rem 2rem;
    img {
        max-width: 100%;
    }
`
