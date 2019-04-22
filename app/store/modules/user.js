import { HTTP } from '../services/http-common'
import { checkRes } from '../services/validate'
import getCookie from '../services/cookie'
import jwtDecode from 'jwt-decode'
import { convertNumber2Persian, convertNumbers2English, checkObjResNumber } from '../../store/services/convertNumbers'
import { timeStampConverterToDate, dateConvertToTimeStamp } from '../../store/services/convertDate'


const _ = require('lodash')
const Cookie = process.client ? require('js-cookie') : undefined


const moduleUser = {
    namespaced: true,
    state: {
        user: null,
        loading: false,
        errMsg: null,
        memberID: null
    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload.data
        },
        setLoading: ( state, payload) => {
            state.loading = payload.data
        },
        setMsgError: (state, payload) => {
            state.errMsg = payload.data
        },
        setMemberID: (state, payload) => {
            // localStorage.setItem('memberId', payload.data.memberId.value)
            // state.memberID = payload.data.memberId.value
            localStorage.setItem('memberId', payload.data)
            state.memberID = payload.data
        }
    },
    getters: {
        getLoading: (state) => {
            return state.loading
        },
        getUserFormState: (state) => {
            return state.user
        },
        getErrMsg: (state) => {
            return state.errMsg
        },
       
    },
    actions: {
        sendMobileForRegister({commit, state, rootState}, payload) {
            console.log('payload is:', payload)
            state.loading = true
            let url = 'members/register'
            let myCookie = getCookie("auth");
            let mobile = payload.data.mobile.replace(/\s/g, '');
            console.log('mobile is:', mobile)
            localStorage.setItem('mobile', mobile)
            let obj = {
                'MobileNumber' : mobile
            }
           
            HTTP.post(url,obj)
                .then((res) => {
                    if (checkRes(res)) {
                        state.loading = false
                        console.log('res.data is:', res.data)
                        commit({
                            type: 'setMemberID',
                            data: '123'
                        })
                        this.$router.push('/user/verify/'+mobile)
                    }
                })
                .catch((err) => {
                    state.loading = false
                    console.log('err is:', err)
                    err = err.toString()
                    commit({
                        type: 'setMsgError',
                        msg: 'مشکلی در سرور به وجود آمده است ... !'
                    })
                    return err
                })
        },
        sendCodeMobileForRegister({commit, state, rootState}, payload) {
            console.log('payload is:', payload)
            localStorage.setItem('codeVerify', payload.data.VerificationCode)
            state.loading = true
            let url = 'members/VerifyMember';
            HTTP.post(url,payload.data)
            .then((res) => {
                if (checkRes(res)) {
                    state.loading = false
                    console.log('res.data is:', res.data)
                    commit({
                        type: 'setMemberID',
                        data: "res.data " 
                    })
                    this.$router.push('/user/setPassword')
                }
            })
            .catch((err) => {
                state.loading = false
                console.log('err is:', err)
                err = err.toString()
                commit({
                    type: 'setMsgError',
                    msg: 'مشکلی در سرور به وجود آمده است ... !'
                })
                return err
            })
            
        },
        sendSetPassword({commit, state, rootState}, payload) {
            console.log('payload is:', payload)
            localStorage.setItem('codeVerify', payload.data.VerificationCode)
            state.loading = true
            let url = 'members/SetCredential/'+localStorage.getItem("memberId");
            HTTP.post(url,payload.data)
            .then((res) => {
                if (checkRes(res)) {
                    state.loading = false
                    console.log('res.data is:', res.data)
                    
                    this.$router.push('/')
                }
            })
            .catch((err) => {
                state.loading = false
                console.log('err is:', err)
                err = err.toString()
                commit({
                    type: 'setMsgError',
                    msg: 'مشکلی در سرور به وجود آمده است ... !'
                })
                return err
            })
        },
        logOutAction({commit, state, rootState}, payload) {
            localStorage.clear();
            localStorage.removeItem('user');
        }
    }
}
export default moduleUser
