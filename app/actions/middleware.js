//utilizes redux and fetch API to handle all http-requests
export function fetchMiddleware ({ dispatch, getState }) {
  return next => action => {
    const { url, types } = action;

    if (!types) {
      return next(action);
    }

    if(!Array.isArray(types)
      || types.length !== 3
      || !types.every(type => typeof type === 'string')) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof url !== 'string' || url === '') {
      throw new Error('Expected a string type url.');
    }

    const [requestType, successType, failureType] = types;

    dispatch({
      type: requestType
    });

    const defaultHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const fetchOptions = {
      headers: defaultHeaders
    };

    console.log(url);

    fetch(url, fetchOptions).then(response => {
      return response.json().then(json => {
        if(response.ok) {
          return json;
        }
        throw json;
      });
    }).then(json => {
      dispatch({
        type: successType,
        response: json
      })
    }).catch(error => {
      dispatch({
        type: failureType,
        error
      })
    }).then(() => { console.log(getState()); })
  }
}
