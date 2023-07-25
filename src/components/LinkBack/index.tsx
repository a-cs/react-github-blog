import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { LinkBackContainer } from './styles'
import { Link, useLocation } from 'react-router-dom'

export function LinkBack() {
    const location = useLocation()

    return (
        <LinkBackContainer>
            <FontAwesomeIcon icon={faChevronLeft} />
            <Link to={location.state.from}>voltar</Link>
        </LinkBackContainer>
    )
}
