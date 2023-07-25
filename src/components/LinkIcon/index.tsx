import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { LinkIconContainer } from './styles'

interface LinkIconProps {
    text: string
    href: string
}

export function LinkIcon({ href, text }: LinkIconProps) {
    return (
        <LinkIconContainer>
            <a href={href}>{text}</a>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkIconContainer>
    )
}
