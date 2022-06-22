import { takeEvery, put, call } from "redux-saga/effects"
import { FETCH_USER, LOGIN_USER, SET_LOGIN, SET_PASSWORD } from "./types"

export function* sagaWatcher() {
  yield takeEvery(FETCH_USER, sagaWorker)
}

function* sagaWorker(data) {
  try {
    const { login, password } = data.payload
    const userName = yield call(() => fetchUser(login, password))
    if (userName) {
      yield put({ type: SET_LOGIN, payload: "" })
      yield put({ type: SET_PASSWORD, payload: "" })
    } else {
      yield put({ type: LOGIN_USER, payload: userName })
    }
  } catch(e) {
    console.log(e)
  }
}

async function fetchUser(login, password) {
  function timeout() {
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }
  await timeout(1000)
  if (login === "user" && password === "test") {
    return "Elon Musk"
  }
  return ""
}
