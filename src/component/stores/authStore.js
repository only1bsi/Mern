import { create } from 'zustand'
import axios from 'axios';
import LoginForm from '../LoginForm';

const authStore = create((set) => ({

  loginForm: {
    email: '',
    password: '',
  },

  updateLoginForm: (e) => {
      const {name, value} = e.target
     
    set((state) => {
      return{
        loginForm:{
            ...state.loginForm,
            [name]: value,
        },
      };
    });
  },
    
  login: async () => { 
    const {loginForm} = authStore.getState();

     const res = await axios.post('http://localhost:5000/login', loginForm, {withCredentials: true});
    
    set({loggedIn: true});

   },

   checkAuth: async () => {
    try {
      await axios.get('/check-auth', {withCredentials: true});
      set({loggedIn: true})
    } catch (error) {
      set({loggedIn: false})
    };
   },
}));
export default authStore;