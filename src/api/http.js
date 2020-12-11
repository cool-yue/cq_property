/**
 *
 * @param {*请求方法} method
 * @param {*请求的content-type} contentType
 * @param {*请求数据的整理方法} handleRequest
 * @param {*响应数据的方法} parseResponse
 */

function requestGenerator(method, contentType, handleRequest, parseResponse = JSON.parse) {
    return function httpRequest(url, data = {}) {
        let data_copy = Object.assign({}, data);

        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            if (method === "GET") {
                request.open(method, url + "?" + transferToFormURL(data));
                data_copy = null
            } else {
                request.open(method, url)
            }

            contentType && request.setRequestHeader("Content-Type", contentType);

            request.onload = function () {
                try {
                    if (request.status === 200) {
                        resolve(parseResponse(request.response));
                    } else {
                        reject(request.status + " " + request.statusText)
                    }
                } catch (e) {
                    reject(e.message);
                }
            };
            request.onerror = function() {
                reject(response.status + " " + this.statusText);
            };

            request.ontimeout = function() {
                reject("timeout!");
            };
            if (typeof handleData === "function") {
                request.send(handleRequest(data_copy));
            } else {
                request.send(data_copy);
            }
        });
    };
}

export function transferToFormURL(data) {
    return Object.keys(data).reduce((first, second, index) => {
        if (index === 0) {
            return first += second + "=" + data[second];
        }
        return first += "&" + second + "=" + data[second];
    }, "");
};

export function transferToMultipart(data) {
    const formdata = new FormData();
    Object.keys(data).forEach((key) => {
        formdata.append(key, data[key]);
    });
    return formdata;
};

const getRequest = requestGenerator("GET");
const deleteRequest = requestGenerator("DELETE");

const jsonRequest = {
    post: requestGenerator("POST", "application/json;charst=utf-8", JSON.stringify),
    put: requestGenerator("PUT", "application/json;charst=utf-8", JSON.stringify),
};

const formRequest = {
    post: requestGenerator("POST", "application/x-www-form-urlencoded", transferToFormURL),
    put:  requestGenerator("PUT", "application/x-www-form-urlencoded", transferToFormURL)
};

const multiRequest = {
    post: requestGenerator("POST", undefined, transferToMultipart),
    put: requestGenerator("PUT", undefined, transferToMultipart)
};

export default {
    getRequest,
    deleteRequest,
    jsonRequest,
    formRequest,
    multiRequest
};