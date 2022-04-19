import qs from "qs"
import { FC } from "react"
import { Link } from "react-router-dom"
import { Person as PersonType} from "../types"

const PersonCard:FC<{person: PersonType}> = ({person}) => {
    return (
        <li className="person">
            <Link to={`/person?${qs.stringify({ name: person.name })}`}>
                {person.name}
            </Link>
        </li>
    )
}

export default PersonCard