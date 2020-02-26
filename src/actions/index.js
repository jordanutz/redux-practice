// Action Creator: represents how we want to change some amount of data inside our state. Dispatched to reducer. 

export const increment = (num) => {
   return {
      type: 'INCREMENT', 
      payload: num
   }
}

export const decrement = () => {
   return {
      type: 'DECREMENT'
   }
}

export const createClaim = (name, amountOfMoneyToCollect) => {
   return {
         type: 'CREATE_CLAIM', 
         payload: {
            name: name, 
            amountOfMoneyToCollect: amountOfMoneyToCollect
      }
   }
}

export const createPolicy = (name) => {
   return {
      type: 'CREATE_POLICY', 
      payload: {
         name: name, 
         amount: 20
      }
   }
}

export const deletePolicy = (name) => {
   return {
      type: "DELETE_POLICY", 
      payload: {
         name: name
      }
   }
}