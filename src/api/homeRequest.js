import http from "./http";

let homeUrl = Object.create(null);

// 路径可以统一配到这里
let urlMap = {
    addTitle: "/api/demandinfo/insertdemandInfo",
    deleteTitleById: "/api/demandinfo/deletedemandInfo/",
    getProvincestateById: "/api/prodemand/provincestate/",
    getListfiles: "/api/file/listfiles",
    uploadfile: "/api/file/uploadfile",
    prodemandComplete: "/api/prodemand/complete/",
    downloadfile: "/api/file/downloadfile/",
    downloadallfile: "/api/file/downloadallfile",
    deletefile: "/api/file/deletefile/",
    changePossWord:"/api/user/changePassword/",
    getTitle: "/api/demandinfo/listdemandInfo",   /*发文列表*/
    getSearchTitle: "/api/demandinfo/listdemandInfo",   /*搜索发文列表*/
    addDemandInfo:"/api/demandinfo/insertdemandInfo",  /*新增发文*/
    downloadattachment: "/api/demandinfo/downloadattachment/",
    getReceiveSta:"/api/stat/selectReceiveStat/"/* 收文统计 */,
    getMarkDates:"/api/demandinfo/deadlinedemandInfo"/* 当月限报日期 */,
    selectOrgs: "/api/org/selectOrgs"/*获取机构列表*/
};



homeUrl.addTitle = (data) =>{
   return http.post(urlMap.addTitle, data)
};

homeUrl.selectOrgs = () =>{
    return http.get(urlMap.selectOrgs)
};

homeUrl.getTitle = (proid,pagenum,pagesize,keyword,urgency,createTime,deadline) =>{
    return http.get(urlMap.getTitle + '?proid=' + proid + '&pagenum=' + pagenum + '&pagesize=' + pagesize + '&keyword=' + keyword + '&urgency=' + urgency + '&createTime=' + createTime + '&deadline=' + deadline)
 };
// 搜索的时候 有的字段不是必传 url通过传入的参数进行拼写
homeUrl.getSearchTitle = (url) =>{
    return http.get(urlMap.getTitle + url)
};

homeUrl.deleteTitleById = (id) =>{
    return http.get(urlMap.deleteTitleById + id)
};

homeUrl.getProvincestateById = (id) =>{
    return http.get(urlMap.getProvincestateById + id)
};

homeUrl.getListfiles = (demandid,proid,keyword,pagenum,pagesize) =>{
    // return http.get("http://10.6.172.179:9091/api/file/listfiles?demandid=16&proid=12&userid=104&pagenum=1&pagesize=100")
    return http.get(urlMap.getListfiles + '?demandid='+ demandid +  '&proid=' + proid + '&keyword='+ keyword + '&pagenum=' + pagenum + '&pagesize=' + pagesize)
};

homeUrl.uploadfile = (userid,proid,demandid,username,phonenumber,proname,addmode,data) =>{
    return http.post(urlMap.uploadfile + '?userid=' + userid + '&username=' + username + '&phonenumber=' + phonenumber + '&proid=' + proid + '&demandid=' + demandid + '&proname='+ proname + '&addmode='+ addmode,data,{ headers: { 'Content-Type': 'multipart/form-data' } })
};

homeUrl.prodemandComplete = (demandid,proid) =>{
    return http.post(urlMap.prodemandComplete + demandid + '/' + proid)
};

homeUrl.downloadfile = (id) =>{
    return urlMap.downloadfile + id
};

homeUrl.downloadallfile = (id,name) =>{
    return urlMap.downloadallfile+ '?demandid=' + id + '&demandname=' + name
};

homeUrl.downloadattachment = (id) =>{
    return urlMap.downloadattachment + id
};

homeUrl.deletefile = (id) =>{
    return http.get(urlMap.deletefile + id)
};
homeUrl.changePossWord = (url) =>{
    return http.get(urlMap.changePossWord + url)
}

homeUrl.addDemandInfo = (data) =>{
    return http.post(urlMap.addDemandInfo,data,{ headers: { 'Content-Type': 'multipart/form-data' } })
};
homeUrl.getReceiveSta = (id) =>{
    return http.get(urlMap.getReceiveSta + id)
};
homeUrl.getMarkDates = () =>{
    return http.get(urlMap.getMarkDates)
};

 /*loginUrl.myLogin = (url) =>{
    return http.get(urlMap.myLogin + url)
 };
 loginUrl.getVerifyCode = () =>{
   return http.get(urlMap.getVerifyCode,{ responseType: 'blob'})
};
loginUrl.checkVerifyCode = (url) =>{
   return http.get(urlMap.checkVerifyCode + url)
};*/
export default homeUrl;