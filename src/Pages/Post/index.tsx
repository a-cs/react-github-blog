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
import { useParams } from 'react-router-dom'

export function Post() {
    const { issueNumber } = useParams()
    console.log('issueNumber:', issueNumber)
    return (
        <div>
            <Header />
            <PostContainer>
                <PostInfo>
                    <TopContainer>
                        <LinkBack />
                        <LinkIcon
                            href="https://github.com/a-cs"
                            text="ver no github"
                        />
                    </TopContainer>
                    <h1>JavaScript data types and data structures</h1>
                    <BottomContainer>
                        <IconLabel icon={faGithub} label="a-cs" />
                        <IconLabel icon={faBuilding} label="Há 1 dia" />
                        <IconLabel icon={faUserGroup} label="5 comentários" />
                    </BottomContainer>
                </PostInfo>
                <Content>
                    <p>
                        Programming languages all have built-in data structures,
                        but these often differ from one language to another.
                        This article attempts to list the built-in data
                        structures available in JavaScript and what properties
                        they have. These can be used to build other data
                        structures. Wherever possible, comparisons with other
                        languages are drawn. Dynamic typing JavaScript is a
                        loosely typed and dynamic language. Variables in
                        JavaScript are not directly associated with any
                        particular value type, and any variable can be assigned
                        (and re-assigned) values of all types:
                    </p>
                </Content>
            </PostContainer>
        </div>
    )
}
