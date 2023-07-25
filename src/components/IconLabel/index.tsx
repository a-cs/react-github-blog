import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { IconLabelContainer } from './styles'

interface IconLabelProps {
    label: string
    icon: IconDefinition
}

export function IconLabel({ label, icon }: IconLabelProps) {
    return (
        <IconLabelContainer>
            <FontAwesomeIcon icon={icon} />
            <p>{label}</p>
        </IconLabelContainer>
    )
}
