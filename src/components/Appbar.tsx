import { Link } from "react-router-dom"

const Appbar = () => {
  return (
    <div className="appbar">
        <h4 >
          <Link to="/" className="header">
            Star Wars
          </Link>
        </h4>
    </div>
  )
}

export default Appbar