import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { IconLabel } from '../../components/IconLabel'
import { LinkIcon } from '../../components/LinkIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import {
    BottomContainer,
    Content,
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

    async function getGithubIssuesData() {
        // const data = apiData
        const { data } = await axios.get(
            `https://api.github.com/repos/${username}/${repo}/issues/${issueNumber}`,
        )
        console.log('issue:', data)
        setPost(data)
    }

    useEffect(() => {
        getGithubIssuesData()
    }, [])
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
                <Content>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        transformLinkUri={false}
                    >
                        {post?.body || ''}
                    </ReactMarkdown>
                </Content>
            </PostContainer>
        </div>
    )
}
