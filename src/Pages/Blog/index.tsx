import { Header } from '../../components/Header'
import { IconLabel } from '../../components/IconLabel'
import { LinkIcon } from '../../components/LinkIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    AuthorInfo,
    BlogContainer,
    BottomContainer,
    ColumnContainer,
    TopContainer,
} from './styles'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { PostsList } from '../../components/PostsList'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PostData } from '../../components/PostCard'
// import { apiData } from '../../../githubAPI'

interface UserData {
    avatar_url: string
    bio: string
    company: string
    followers: number
    html_url: string
    login: string
    name: string
    // repos_url: 'https://api.github.com/users/a-cs/repos'
}

export function Blog() {
    const username = 'a-cs'
    const repo = 'react-github-blog'
    const [searchText, setSearchText] = useState('')
    const [userData, setUserData] = useState<UserData>()
    const [postList, setPostList] = useState<PostData[]>()

    async function getGithubUserData() {
        const { data } = await axios.get(
            `http://api.github.com/users/${username}`,
        )
        console.log('response:', data)
        setUserData(data)
    }

    async function getGithubIssuesData() {
        // const data = apiData
        const { data } = await axios.get(
            `https://api.github.com/search/issues`,
            {
                params: {
                    q: `${searchText}repo:${username}/${repo}`,
                },
            },
        )
        console.log('issues:', data)
        setPostList(data.items)
    }

    useEffect(() => {
        getGithubUserData()
        getGithubIssuesData()
    }, [])
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
                {postList && <PostsList postList={postList} />}
            </BlogContainer>
        </div>
    )
}
