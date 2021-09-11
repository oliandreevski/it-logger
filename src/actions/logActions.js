import { GET_LOGS, SET_LOADING ,LOGS_ERROR,ADD_LOG, DELETE_LOGS,SET_CURRENT,CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types'
//Get logs from the reducer
export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch ('/logs')
    const data = await res.json()

    dispatch ({
      type: GET_LOGS,
      payload: data
    })
  } catch (err) {
    dispatch ({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}
//Add Log

export const addLog = (log) => async dispatch => {
  try {
    setLoading()

    const res = await fetch ('/logs',{
      method: 'POST',
      body: JSON.stringify(log),
      headers: { 'Content-Type':'application/json' }

    })
    const data = await res.json()

    dispatch ({
      type: ADD_LOG,
      payload: data
    })
  } catch (err) {
    dispatch ({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}

//Search Logs

export const searchLogs = text => async dispatch => {
  try {
    setLoading()

    const res = await fetch (`/logs?q=${text}`)
    const data = await res.json()

    dispatch ({
      type: SEARCH_LOGS,
      payload: data
    })
  } catch (err) {
    dispatch ({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}

//Delete Log

export const deleteLogs = id => async dispatch => {
  try {
    setLoading()

    await fetch (`/logs/${id}`, {
      method: 'DELETE'
      })

    dispatch ({
      type: DELETE_LOGS,
      payload: id
    })
  } catch (err) {
    dispatch ({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}

//Upbate Log

export const updateLog = log => async dispatch => {
  try {
    setLoading()

      const res = await fetch (`/logs/${log.id}`,{
      method: 'PUT',
      body: JSON.stringify(log),
      headers: { 'Content-Type':'application/json' }

    })
    const data = await res.json()

    dispatch ({
      type: UPDATE_LOG,
      payload: data
    })
  } catch (err) {
    dispatch ({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}

//Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}
//Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}

//SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}