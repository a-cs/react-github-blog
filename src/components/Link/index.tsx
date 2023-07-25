import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from './styles'

export function Link() {
    return (
        <LinkContainer>
            <a href="https://github.com/a-cs">GITHUB</a>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkContainer>
    )
}
