import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        login:{
            currentUser : null,
            isFetching:false,
            error:false,
        },
        register:{
            isFetching:false,
            error:false,
            success:false,
        }
    },
    reducers:{
        loginStart:(state)=>{
            state.login.isFetching = true;
        },
        loginSuccess:(state,action)=>{
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
        },
        loginFail:(state)=>{
            state.login.isFetching = false;
            state.login.error = true;
        },

        registerStart:(state)=>{
            state.register.isFetching = true;
        },
        registerSuccess:(state,action)=>{
            state.register.isFetching = false;
            state.register.success = true
        },
        registerFail:(state)=>{
            state.register.isFetching = false;
            state.register.error = true;
        },

        logoutStart: (state)=>{
            state.login.isFetching = true;
        },
        logoutSuccess:(state)=>{
                state.login.isFetching = false
                state.login.currentUser = null
                state.login.error = false
        },
        logoutFail:(state)=>{
            state.login.isFetching=false
            state.login.error = true
        },
        
    }
})

export const {loginFail,loginStart,loginSuccess,logoutFail,logoutStart,logoutSuccess,registerFail,registerStart,registerSuccess}  = AuthSlice.actions;

export default AuthSlice.reducer