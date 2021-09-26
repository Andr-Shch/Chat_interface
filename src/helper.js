import { isToday, parseJSON } from "date-fns"
import format from "date-fns/format"


 export  const isPersistedState = stateName =>{  //function to check sessionStorage
    const sessionState = sessionStorage.getItem(stateName)
    return sessionState&&JSON.parse(sessionState)
  }

   

   export const timeInNumbers = (time)=> {   // convet tome in 00:00 01/01/2020
        return format(parseJSON(time), 'HH:mm  dd/MM/yyyy ')
   }

   export const timeWithMonth = (time) => {  // return time in SideBar 
     let hronos = parseJSON(time)
   
     return isToday(hronos)?format(parseJSON(time), 'HH:mm') : format(parseJSON(time), ' dd MMM yyyy ')
   }
