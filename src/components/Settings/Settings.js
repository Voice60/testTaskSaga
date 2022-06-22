import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { getUser } from "../../redux/selectors"

const Settings = () => {
  const { userName } = useSelector(getUser)
  let navigate = useNavigate()
  useEffect(() => {
    if (!userName) {
      navigate("/login")
    }
  }, [userName])
  return (
    <div className="flex">
      <Link to="/">Go back</Link>
      <h1>Settings</h1>
    </div>
  )
}

export default Settings
