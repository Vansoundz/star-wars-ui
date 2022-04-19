import { FC } from "react"
import { Person } from "../types"

const PersonInfo:FC<{person: Person}> = ({person}) => {
  return (
    <div className="person-info">
        <div className="info">
            <div><div className="field">Name</div> <div className="value">{person.name}</div></div>
            <div><div className="field">Gender</div> <div className="value">{person.gender}</div></div>
            <div><div className="field">Height</div> <div className="value">{person.height}</div></div>
            <div><div className="field">Mass</div> <div className="value">{person.mass}</div></div>
            <div>
                <a href={person.homeworld} target="_blank" rel="noopenner noreferrer">Home World</a>
            </div>
        </div>
        <div className="star-wars">
            <div className="storm-trooper">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/StormtrooperHelmetIcon.svg/1200px-StormtrooperHelmetIcon.svg.png" 
                    alt=""
                    width={250}
                 />
            </div>
        </div>
    </div>
  )
}

export default PersonInfo