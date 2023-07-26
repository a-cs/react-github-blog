import { useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { IconLabel } from '../../components/IconLabel'
import { LinkIcon } from '../../components/LinkIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import {
    BottomContainer,
    Content,
    MessageContainer,
    PostContainer,
    PostInfo,
    TopContainer,
} from './styles'
import { LinkBack } from '../../components/LinkBack'
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useParams } from 'react-router-dom'

export interface Post {
    number: number
    title: string
    created_at: Date
    body: string
    comments: number
    html_url: string
    user: {
        login: string
    }
}

export function Post() {
    const username = 'a-cs'
    const repo = 'react-github-blog'
    const { issueNumber } = useParams()
    console.log('issueNumber:', issueNumber)

    const [post, setPost] = useState<Post>()
    const [searchError, setSearchError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getGithubIssueData = useCallback(async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(
                `https://api.github.com/repos/${username}/${repo}/issues/${issueNumber}`,
            )
            console.log('issue:', data)
            setPost(data)
            setIsLoading(false)
        } catch (error) {
            const { response }: any = error
            const { data } = response
            const { message } = data
            setSearchError(message)
            setIsLoading(false)
        }
    }, [issueNumber])

    useEffect(() => {
        getGithubIssueData()
    }, [getGithubIssueData])
    return (
        <div>
            <Header />
            <PostContainer>
                <PostInfo>
                    <TopContainer>
                        <LinkBack />
                        <LinkIcon
                            href={post?.html_url || ''}
                            text="ver no github"
                        />
                    </TopContainer>
                    <h1>{post?.title}</h1>
                    <BottomContainer>
                        <IconLabel
                            icon={faGithub}
                            label={post?.user.login || ''}
                        />
                        <IconLabel
                            icon={faBuilding}
                            label={
                                formatDistanceToNow(
                                    new Date(post?.created_at || '2023-01-01'),
                                    {
                                        addSuffix: true,
                                        locale: ptBR,
                                    },
                                ) || ''
                            }
                        />
                        <IconLabel
                            icon={faUserGroup}
                            label={`${post?.comments} comentários`}
                        />
                    </BottomContainer>
                </PostInfo>
                {!isLoading ? (
                    <>
                        {!post && (
                            <MessageContainer
                                isError={searchError.length !== 0}
                            >
                                <p>{searchError}</p>
                            </MessageContainer>
                        )}
                        {post && (
                            <Content>
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    transformLinkUri={false}
                                >
                                    {post?.body || ''}
                                </ReactMarkdown>
                            </Content>
                        )}
                    </>
                ) : (
                    <>
                        <MessageContainer isError={false}>
                            <p>Loading...</p>
                        </MessageContainer>
                    </>
                )}
            </PostContainer>
        </div>
    )
}
