import { useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import { getUser } from "../../redux/selectors"
const Home = () => {
  const { userName } = useSelector(getUser)
  let navigate = useNavigate()
  useEffect(() => {
    if (!userName) {
      navigate("/login")
    }
  }, [userName])
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
    </div>
  )
}

export default Home
