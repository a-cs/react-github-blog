import { Header } from '../../components/Header'
import { IconLabel } from '../../components/IconLabel'
import { LinkIcon } from '../../components/LinkIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    AuthorInfo,
    BlogContainer,
    BottomContainer,
    ColumnContainer,
    Input,
    MessageContainer,
    PostListHeader,
    PostListTopContainer,
    TopContainer,
} from './styles'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { PostsList } from '../../components/PostsList'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { PostData } from '../../components/PostCard'

interface UserData {
    avatar_url: string
    bio: string
    company: string
    followers: number
    html_url: string
    login: string
    name: string
}

export function Blog() {
    const username = 'a-cs'
    const repo = 'react-github-blog'
    const [searchText, setSearchText] = useState('')
    const [searchError, setSearchError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState<UserData>()
    const [postList, setPostList] = useState<PostData[]>()

    async function getGithubUserData() {
        const { data } = await axios.get(
            `http://api.github.com/users/${username}`,
        )
        console.log('response:', data)
        setUserData(data)
    }

    const getGithubIssuesData = useCallback(async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(
                `https://api.github.com/search/issues`,
                {
                    params: {
                        q: `${searchText} repo:${username}/${repo}`,
                    },
                },
            )
            console.log('issues:', data)
            setSearchError('')
            setPostList(data.items)
            setIsLoading(false)
        } catch (error) {
            const { response }: any = error
            const { data } = response
            const { message } = data
            setSearchError(message)
            setIsLoading(false)
        }
    }, [searchText])

    useEffect(() => {
        getGithubUserData()
    }, [])

    useEffect(() => {
        getGithubIssuesData()
    }, [getGithubIssuesData])

    function handleInputChange(event: any) {
        setSearchText(event.target.value)
    }

    return (
        <div>
            <Header />
            <BlogContainer>
                <AuthorInfo>
                    <img src={userData?.avatar_url} alt="" />
                    <ColumnContainer>
                        <TopContainer>
                            <h1>{userData?.name || ''}</h1>
                            <LinkIcon
                                href={userData?.html_url || ''}
                                text="github"
                            />
                        </TopContainer>
                        <h2>{userData?.bio}</h2>
                        <BottomContainer>
                            <IconLabel
                                icon={faGithub}
                                label={userData?.login || ''}
                            />
                            <IconLabel
                                icon={faBuilding}
                                label={userData?.company || ''}
                            />
                            <IconLabel
                                icon={faUserGroup}
                                label={`${userData?.followers} seguidores`}
                            />
                        </BottomContainer>
                    </ColumnContainer>
                </AuthorInfo>
                <PostListHeader>
                    <PostListTopContainer>
                        <h1>Publicações</h1>
                        <h2>{postList?.length || 0} Publicações</h2>
                    </PostListTopContainer>

                    <Input
                        type="text"
                        placeholder="Buscar conteúdo por palavras"
                        onChange={handleInputChange}
                    />
                </PostListHeader>
                {!isLoading ? (
                    <>
                        {postList?.length === 0 && (
                            <MessageContainer
                                isError={searchError.length !== 0}
                            >
                                <p>
                                    {searchError
                                        ? `Error: ${searchError}`
                                        : `Nenhuma publicação encontrada contendo as palavras "${searchText}"`}
                                </p>
                            </MessageContainer>
                        )}
                        {postList && <PostsList postList={postList} />}
                    </>
                ) : (
                    <>
                        <MessageContainer isError={false}>
                            <p>Loading...</p>
                        </MessageContainer>
                    </>
                )}
            </BlogContainer>
        </div>
    )
}
