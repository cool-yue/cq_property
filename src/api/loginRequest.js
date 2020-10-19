import http from "./http";

let loginUrl = Object.create(null);

// 路径可以统一配到这里
let urlMap = {
    getProvinceNum: "/api/province/selectAllProvinces",
    getSelectOrgs:"api/org/selectOrgs",
    register: "/api/user/register",
    myLogin:"/api/user/login",
    getVerifyCode:"api/user/getVerifyCode",
    checkVerifyCode:"api/user/check/",
    checkOlnyName:"api/user/isUnique"
};



loginUrl.getProvinceNum = () =>{
   return http.get(urlMap.getProvinceNum)
};
loginUrl.getSelectOrgs = (url) =>{
   return http.get(urlMap.getSelectOrgs)
};
loginUrl.registerUser = (data) =>{
    return http.post(urlMap.register, data)
 };

 loginUrl.myLogin = (url) =>{
    return http.get(urlMap.myLogin + url)
 };
 loginUrl.getVerifyCode = () =>{
   return http.get(urlMap.getVerifyCode,{ responseType: 'blob'})
};
loginUrl.checkVerifyCode = (url) =>{
   return http.get(urlMap.checkVerifyCode + url)
};
loginUrl.checkOlnyName = (url) =>{
   return http.get(urlMap.checkOlnyName + url)
};

export default loginUrl;