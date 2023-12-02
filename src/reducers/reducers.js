// reducers.js
const initialState = {
    contacts: [
      { id: 1, name: 'Anthony', email: 'anthony@mail.ai', phone: 'XxxxXX' },
      // Add more contacts here
    ],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        const newContact = {
          id: state.contacts.length > 0 ? state.contacts[state.contacts.length - 1].id + 1 : 1,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
        };
        return { ...state, contacts: [...state.contacts, newContact] };
      case 'DELETE_CONTACT':
        return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
      case 'EDIT_CONTACT':
        return {
          ...state,
          contacts: state.contacts.map(contact =>
            contact.id === action.payload.id ? { ...contact, ...action.payload } : contact
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  