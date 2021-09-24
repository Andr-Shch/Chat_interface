//function to check sessionStorage
 export  const isPersistedState = stateName =>{  
    const sessionState = sessionStorage.getItem(stateName)
    return sessionState&&JSON.parse(sessionState)
  }