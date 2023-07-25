/* eslint-disable camelcase */
import { Link, useLocation } from 'react-router-dom'
import {
    Content,
    LinkContainer,
    PostCardContainer,
    TopContainer,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export interface PostData {
    number: number
    title: string
    created_at: Date
    body: string
}

interface PostCardProps extends PostData {}

export function PostCard({ number, title, created_at, body }: PostCardProps) {
    const location = useLocation()
    return (
        <PostCardContainer>
            <Link to={`/post/${number}`} state={{ from: location.pathname }}>
                <LinkContainer>
                    <TopContainer>
                        <h3>{title}</h3>
                        <span>
                            {formatDistanceToNow(new Date(created_at), {
                                addSuffix: true,
                                locale: ptBR,
                            })}
                        </span>
                    </TopContainer>
                    <Content>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            transformLinkUri={false}
                        >
                            {body}
                        </ReactMarkdown>
                    </Content>
                </LinkContainer>
            </Link>
        </PostCardContainer>
    )
}
