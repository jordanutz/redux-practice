const policies = (listOfPolicies = [], action) => {
   switch (action.type) {
      case 'CREATE_POLICY':
         return [...listOfPolicies, action.payload.name]
      case 'DELETE_POLICY':
         return listOfPolicies.filter(policy => policy != action.payload.name)
      default: 
         return listOfPolicies
   }
}

export default policies;