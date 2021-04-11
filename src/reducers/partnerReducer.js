export default function partnerReducer(state = { partners: [] }, action) {
  console.log(action);
  switch (
    action.type

    //     case 'FETCH_VENDORS':
    //         return { vendors: action.payload }
    //         // break;

    //     case 'ADD_VENDOR':
    //         return {...state, vendors: [...state.vendors, action.payload]}

    //     case 'EDIT_VENDOR':
    //         return {...state, vendors: [...state.vendors, action.payload]}

    //     case 'DELETE_VENDOR':
    //         let vendorsLeft = state.vendors.filter(vendor =>vendor.id !== action.payload)
    //         return { vendors: vendorsLeft }

    //     case 'ADD_PRODUCT':
    //         let vendors = state.vendors.map(vendor => {
    //             if (vendor.id === action.payload.id){
    //                 return action.payload
    //             } else {
    //                 return vendor
    //             }
    //         })
    //         return { ...state, vendors: vendors}

    //     case 'DELETE_PRODUCT':
    //         debugger
    //         let selectedProductToDelete = state.vendors.map(vendor => {
    //             if (vendor.id === action.payload.id){
    //                 return action.payload
    //             } else {
    //                 return vendor
    //             }
    //         })
    //         return { ...state, vendors: selectedProductToDelete }

    //     default:
    //         return state
  ) {
  }
}
