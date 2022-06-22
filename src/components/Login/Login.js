import { useSelector, useDispatch } from "react-redux"
import { FETCH_USER, SET_LOGIN, SET_PASSWORD } from "../../redux/types"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { getUser } from "../../redux/selectors"
const Login = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  let navigate = useNavigate()
  const onSubmitForm = (e) => {
    e.preventDefault()
    dispatch({
      type: FETCH_USER,
      payload: { login: user.login, password: user.password }
    })
  }

  useEffect(() => {
    if (user.userName) {
      navigate("/")
    }
  }, [user.userName])

  return (
    <form onSubmit={onSubmitForm}>
      <input
        value={user.login}
        placeholder="login"
        onChange={(e) => dispatch({ type: SET_LOGIN, payload: e.target.value })}
        type="text"
      />
      <input
        value={user.password}
        placeholder="password"
        onChange={(e) =>
          dispatch({ type: SET_PASSWORD, payload: e.target.value })
        }
        type="text"
      />
      <button>Отправить</button>
    </form>
  )
}

export default Login
