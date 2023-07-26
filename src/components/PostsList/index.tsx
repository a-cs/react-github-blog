import { PostCard, PostData } from '../PostCard'
import { ListContainer, PostsListContainer } from './styles'

interface PostsListProps {
    postList: PostData[]
}

export function PostsList({ postList }: PostsListProps) {
    return (
        <PostsListContainer>
            <ListContainer>
                {postList.map((post) => {
                    return <PostCard key={post.number} {...post} />
                })}
            </ListContainer>
        </PostsListContainer>
    )
}
