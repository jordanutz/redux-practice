const claimsHistory = (oldListOfClaims = [], action) => {
   switch (action.type) {
      case 'CREATE_CLAIM': 
      // Whenever one of our reducers ges calle dwith old state, if we want to make any changes to that state, we have to returna  copletely new object. We never change the initial state directly. Redux needs to decide whether or not changes have been made in reducer. Looks at old state that was passed into reducer and whatever returned on other side. If it's the same object in memory, no changes have been made. 

      // This creates brand new array, takes everything out of our old list of claims and adds to new array, and adds action that just came into this reducer, exlcuding working with integers. 
         return [...oldListOfClaims, action.payload]
      default:  
         return oldListOfClaims;  
   }
}
