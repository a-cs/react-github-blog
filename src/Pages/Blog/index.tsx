import { Header } from '../../components/Header'
import { IconLabel } from '../../components/IconLabel'
import { Link } from '../../components/Link'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    AuthorInfo,
    BlogContainer,
    BottomContainer,
    ColumnContainer,
    TopContainer,
} from './styles'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Blog() {
    return (
        <div>
            <Header />
            <BlogContainer>
                <AuthorInfo>
                    <img src="https://github.com/a-cs.png" alt="" />
                    <ColumnContainer>
                        <TopContainer>
                            <h1>Anderson Carneiro Sousa</h1>
                            <Link />
                        </TopContainer>
                        <h2>
                            Tristique volutpat pulvinar vel massa, pellentesque
                            egestas. Eu viverra massa quam dignissim aenean
                            malesuada suscipit. Nunc, volutpat pulvinar vel
                            mass.
                        </h2>
                        <BottomContainer>
                            <IconLabel icon={faGithub} label="a-cs" />
                            <IconLabel icon={faBuilding} label="T-Systems" />
                            <IconLabel
                                icon={faUserGroup}
                                label="32 seguidores"
                            />
                        </BottomContainer>
                    </ColumnContainer>
                </AuthorInfo>
                <h1>Blog</h1>
            </BlogContainer>
        </div>
    )
}
