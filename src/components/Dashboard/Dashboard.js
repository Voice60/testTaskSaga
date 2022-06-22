import { useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import { getUser } from "../../redux/selectors"
const Dashboard = () => {
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
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
