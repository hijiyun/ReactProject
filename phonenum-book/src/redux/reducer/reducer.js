const initialState ={
    contact:[],
    keyword: "" //state 새로 추가
};

const contactReducer = (state = initialState, action) => {
    let {type, payload} = action; // eslint-disable-next-line
    switch(type){
        case "ADD_CONTACT":
            state.contact.push(
                {name: payload.name,
                phoneNumber: payload.phoneNumber}
            );
            break;
        case "SEARCH_BY_USERNAME":
            state.keyword= payload.keyword;
            break;
    }
    return {...state}
}
export default contactReducer

