import { createSlice } from '@reduxjs/toolkit';

const docSlice = createSlice({
    name: 'doc',
    initialState: {
        docs: {
            allDoc: null,
            isFetching: false,
            error: false,
        },
        doc: {
            anDoc: null,
            isFetching: false,
            error: false,
        },
        resultFindDocs:{
            allDoc: null,
            isFetching: false,
            error: false,
        },
        msg: '',
    },
    reducers: {
        addDocStart: (state) => {
            state.docs.isFetching = true;
        },
        addDocSuccess: (state) => {
            state.docs.isFetching = false;
        },
        addDocFail: (state) => {
            state.docs.isFetching = false;
            state.docs.error = true;
        },
        getAllDocStart: (state) => {
            state.docs.isFetching = true;
        },
        getAllDocSuccess: (state, action) => {
            state.docs.isFetching = false;
            state.docs.allDoc = action.payload;
        },
        getAllDocFail: (state) => {
            state.docs.isFetching = false;
            state.docs.error = true;
        },
        getDocStart: (state) => {
            state.doc.isFetching = true;
        },
        getDocSuccess: (state, action) => {
            state.doc.isFetching = false;
            state.doc.anDoc = action.payload;
        },
        getDocFail: (state) => {
            state.doc.isFetching = false;
            state.doc.error = false;
        },
        deleteDocStart: (state) => {
            state.docs.isFetching = true;
        },
        deleteDocSuccess: (state, action) => {
            state.docs.isFetching = true;
            state.docs.allDoc = action.payload;
        },
        deleteDocFail: (state) => {
            state.docs.isFetching = false;
            state.docs.error = true;
        },
        findDocStart:(state)=>{
            state.resultFindDocs.isFetching = true;
        },
        findDocSuccess:(state,action)=>{
            state.resultFindDocs.isFetching = false;
            state.resultFindDocs.allDoc = action.payload;
        },
        findDocFail:(state)=>{
            state.resultFindDocs.isFetching = false
            state.resultFindDocs.error = true
        },
        updateDocStart:(state)=>{
            state.docs.isFetching = true;
        },
        updateDocSuccess:(state,action)=>{
            state.docs.isFetching = false;
            state.docs.allDoc = action.payload;
        },
        updateDocFail:(state)=>{
            state.docs.isFetching = false;
            state.docs.error = false;
        },
    },
});

export const {findDocSuccess,findDocFail,updateDocFail,updateDocSuccess,updateDocStart,
    findDocStart,
    addDocStart,
    addDocSuccess,
    addDocFail,
    getDocFail,
    getDocStart,
    getDocSuccess,
    getAllDocStart,
    getAllDocFail,
    getAllDocSuccess,
    deleteDocFail,
    deleteDocSuccess,
    deleteDocStart,
} = docSlice.actions;
export default docSlice.reducer;
