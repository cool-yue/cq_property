import {transferToFormURL, transferToMultipart} from "../../api/http.js";
import http from "../../api/http.js";

describe("http.js", () => {
    let xhr, requests, url, data;
    before(() => {
        xhr = sinon.useFakeXMLHttpRequest();
        requests = [];
        xhr.onCreate = (req) => {
            requests.push(req);
        };
        url = "/aaa/bbb/ccc"
        data = {
            aaa: 1,
            bbb: 2,
            ccc: "aaa"
        };
    });
    after(() => {
        xhr.restore();
    });
    afterEach(() => {
        requests.length = 0;
    });
    it("transferToFormURL", () => {
        const output = "name1=aaa&abc=123&ccc=456";
        const input = {
            name1: "aaa",
            abc: "123",
            ccc: "456"
        };
        expect(transferToFormURL(input)).to.equal(output);
    });

    it("transferToMultipart", () => {
        const output = "name1=aaa&abc=123&ccc=456";
        const file = new File(["foo"], "foo.txt");
        const input = {
            name1: "aaa",
            file
        };

        const formdata = transferToMultipart(input);

        expect(formdata.constructor).to.equal(FormData);
        expect(formdata.has("name1")).to.be.true;
        expect(formdata.get("name1")).to.equal("aaa");
        expect(formdata.has("file")).to.be.true;
        expect(formdata.get("file")).to.equal(file);
    });
    it("getReqeust 200", (done) => {
        let cb = sinon.fake();
        http.getRequest(url, data).then((res) => {
            return cb(res);
        }).then((res) => {
            expect(cb.callCount).to.be.equal(1);
            expect(cb.calledWith({aaa:"ccc"})).to.be.true;
            done();
        });

        let request = requests[0];
        request.respond(200, {"Content-Type":"application/json"}, '{"aaa":"ccc"}');

        expect(request.url).to.be.equal("/aaa/bbb/ccc?aaa=1&bbb=2&ccc=aaa");
        expect(request.status).to.be.equal(200);
        expect(request.method).to.be.equal("GET");

    });
    it("getReqeust not 200", (done) => {
        let cb_success = sinon.fake();
        let cb_fail = sinon.fake();
        http.getRequest(url, data).then((res) => {
            cb_success(res);
        }).catch((err) => {
            cb_fail(err);
            return err;
        }).then((res) => {
            expect(request.status).to.be.equal(500);
            expect(cb_success.callCount).to.equal(0);
            expect(cb_fail.callCount).to.equal(1);
            expect(res).to.equal("500 Internal Server Error");
            done();
        });
        let request = requests[0];
        request.respond(500, {"Content-Type":"application/json"}, '{"message":"error"}');;
    });
    it("deleteRequest 200", (done) => {
        let cb_success = sinon.fake();
        let cb_fail = sinon.fake();
        http.deleteRequest(url).then(res => {
            cb_success(res);
        }).then(res => {
            expect(request.url).to.be.equal("/aaa/bbb/ccc");
            expect(request.method).to.be.equal("DELETE");
            expect(request.status).to.be.equal(200);
            expect(cb_success.callCount).to.equal(1);
            expect(cb_success.calledWith({message:"ok"})).to.be.true;
            done();
        });
        let request = requests[0];
        request.respond(200, {"Content-Type":"application/json"}, '{"message":"ok"}');;

    });
    it("deleteRequest not 200", () => {
        expect(false).to.be.true;
    });
    it("jsonRequest.post, 200", () => {

        expect(false).to.be.true;
    });
    it("jsonRequest.put, not 200", () => {
        expect(false).to.be.true;
    });
    it("formRequest.post, 200", () => {
        expect(false).to.be.true;
    });
    it("formRequest.put, not 200", () => {
        expect(false).to.be.true;
    });
    it("multiRequest.post, 200", () => {
        expect(false).to.be.true;
    });
    it("multiRequest.put, 200", () => {
        expect(false).to.be.true;
    });

});