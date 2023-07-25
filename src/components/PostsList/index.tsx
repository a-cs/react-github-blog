import { PostCard, PostData } from '../PostCard'
import {
    Input,
    ListContainer,
    PostsListContainer,
    TopContainer,
} from './styles'

interface PostsListProps {
    postList: PostData[]
}

export function PostsList({ postList }: PostsListProps) {
    return (
        <PostsListContainer>
            <TopContainer>
                <h1>Publicações</h1>
                <h2>{postList.length} Publicações</h2>
            </TopContainer>
            <Input type="text" placeholder="Buscar conteúdo" />
            <ListContainer>
                {postList.map((post) => {
                    return <PostCard key={post.number} {...post} />
                })}
            </ListContainer>
        </PostsListContainer>
    )
}
