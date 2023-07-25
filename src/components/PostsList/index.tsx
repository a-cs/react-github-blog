import { PostCard } from '../PostCard'
import {
    Input,
    ListContainer,
    PostsListContainer,
    TopContainer,
} from './styles'

export function PostsList() {
    return (
        <PostsListContainer>
            <TopContainer>
                <h1>Publicações</h1>
                <h2>6 Publicações</h2>
            </TopContainer>
            <Input type="text" placeholder="Buscar conteúdo" />
            <ListContainer>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </ListContainer>
        </PostsListContainer>
    )
}
