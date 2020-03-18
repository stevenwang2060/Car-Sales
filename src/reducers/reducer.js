//initial state
const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-8 engine', price: 1500 },
        { id: 2, name: 'Racing Detail Package', price: 1500 },
        { id: 3, name: 'Premium Sound System', price: 500 },
        { id: 4, name: 'Rear Spoiler', price: 250 }
    ]
};

//reducer
export const reducer = (state = initialState, action ) => {
console.log('reducer state', state)
console.log('reducer payload', action.payload)


switch(action.type) {
    case 'ADD_ITEM':
        return{
            ...state,
            additionalPrice: state.additionalPrice + action.payload.price,
            car: {
                ...state.car,
                features: [
                    ...state.car.features,
                    action.payload
                ]
            }
        }
    case 'REMOVE_ITEM':
        return {
            ...state,
            additionalPrice: state.additionalPrice - action.payload.price,
            car: {
                ...state.car,
                features:[
                    ...state.car.features.filter(item => item.id !== action.payload.id)
                ]
            }
        }
    default: return state
}
}