import axios from "axios" 


axios.defaults.baseURL="http://qcs.sb"

var api={
    login(params){
      
        return axios.post('/admin/index/login',params)
    },
    cAtmin(params){
        return axios.get('/admin/admin/index',{params:params})
    },
    uAtmin(){
        return axios.post('/admin/admin/edit/id/2',{company_id:'dsfsd',user_name:'第三方士大夫',user_pass:'dfsfs',role:'3'})
    },
    createAtmin(params){
        return axios.get('/admin/admin/add',{params:params})
    },


}

export default api