(window["webpackJsonp_VueMicroApp"]=window["webpackJsonp_VueMicroApp"]||[]).push([["chunk-6a2e3c7a"],{"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2e94":function(t,e,r){r("6d93"),t.exports=self.fetch.bind(self)},"6d93":function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return c})),r.d(e,"Request",(function(){return g})),r.d(e,"Response",(function(){return E})),r.d(e,"DOMException",(function(){return T})),r.d(e,"fetch",(function(){return B}));var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};function o(t){return t&&DataView.prototype.isPrototypeOf(t)}if(n.arrayBuffer)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&i.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!==typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function c(t){this.map={},t instanceof c?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function l(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function p(t){var e=new FileReader,r=d(e);return e.readAsText(t),r}function y(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&o(t)?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}),this.text=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(y(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(t,e){t=s(t),e=u(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},c.prototype["delete"]=function(t){delete this.map[s(t)]},c.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},c.prototype.set=function(t,e){this.map[s(t)]=u(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},c.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},c.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},n.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t){var e=t.toUpperCase();return w.indexOf(e)>-1?e:t}function g(t,e){e=e||{};var r=e.body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=v(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function _(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function A(t){var e=new c,r=t.replace(/\r?\n[\t ]+/g," ");return r.split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e}function E(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},m.call(g.prototype),m.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];E.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})};var T=self.DOMException;try{new T}catch(P){T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},T.prototype=Object.create(Error.prototype),T.prototype.constructor=T}function B(t,e){return new Promise((function(r,o){var i=new g(t,e);if(i.signal&&i.signal.aborted)return o(new T("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:A(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;r(new E(e,t))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new T("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&n.blob&&(a.responseType="blob"),i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),i.signal&&(i.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",s)}),a.send("undefined"===typeof i._bodyInit?null:i._bodyInit)}))}B.polyfill=!0,self.fetch||(self.fetch=B,self.Headers=c,self.Request=g,self.Response=E)},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),a=r("861d"),s=r("7b0b"),u=r("50c4"),f=r("8418"),c=r("65f0"),h=r("1dde"),d=r("b622"),l=r("2d00"),p=d("isConcatSpreadable"),y=9007199254740991,b="Maximum allowed index exceeded",m=l>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),w=h("concat"),v=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},g=!m||!w;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,r,n,o,i,a=s(this),h=c(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?a:arguments[e],v(i)){if(o=u(i.length),d+o>y)throw TypeError(b);for(r=0;r<o;r++,d++)r in i&&f(h,d,i[r])}else{if(d>=y)throw TypeError(b);f(h,d++,i)}return h.length=d,h}})},"9d32":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("a-card",{attrs:{title:"Vue 微应用列表页"}},[r("a-table",{attrs:{rowKey:"_id",dataSource:t.data,pagination:t.pageInfo}},[r("a-table-column",{attrs:{title:"菜名",dataIndex:"name"}}),r("a-table-column",{attrs:{title:"价格",dataIndex:"price",customRender:function(t){return"￥ "+t}}})],1)],1)],1)},o=[],i=(r("99af"),r("96cf"),r("1da1")),a=r("2e94"),s=r.n(a),u={name:"List",data:function(){var t=this;return{data:[],pageInfo:{onChange:function(e){return t.fetchVegetable(e,10)}}}},methods:{fetchVegetable:function(t,e){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s()("http://dev-api.jt-gmall.com/mall",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"{ vegetableList (page: ".concat(t,", pageSize: ").concat(e,") { page, pageSize, total, items { _id, name, poster, price } } }")})}).then((function(t){return t.json()}));case 2:o=n.sent,i=o.data.vegetableList,r.data=i.items,r.pageInfo={current:i.page,pageSize:i.pageSize,total:i.total,onChange:function(t){return r.fetchVegetable(t,10)}};case 6:case"end":return n.stop()}}),n)})))()}},created:function(){this.fetchVegetable(1,10)}},f=u,c=r("2877"),h=Object(c["a"])(f,n,o,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-6a2e3c7a.91514b21.js.map