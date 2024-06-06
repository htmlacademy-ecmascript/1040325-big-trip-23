(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,a=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",y={};y[_]=m;var g=function(t){return t instanceof S},b=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,s=o}return!i&&s&&(_=s),s||!i&&_},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},w=$;w.l=b,w.i=g,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,f=w.p(t),h=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(a)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,$=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case u:return c?h(1,0):h(31,11);case l:return c?h(1,v):h(0,v+1);case o:var y=this.$locale().weekStart||0,g=(m<y?m+7:m)-y;return h(c?$-g:$+(6-g),v);case a:case d:return p(_+"Hours",0);case r:return p(_+"Minutes",1);case s:return p(_+"Seconds",2);case i:return p(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,c=w.p(t),f="set"+(this.$u?"UTC":""),h=(o={},o[a]=f+"Date",o[d]=f+"Date",o[l]=f+"Month",o[u]=f+"FullYear",o[r]=f+"Hours",o[s]=f+"Minutes",o[i]=f+"Seconds",o[n]=f+"Milliseconds",o)[c],p=c===a?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var d,f=this;n=Number(n);var h=w.p(c),p=function(t){var e=M(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(h===l)return this.set(l,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===a)return p(1);if(h===o)return p(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var h,p=w.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,$=this-m,_=w.m(this,m);return _=(h={},h[u]=_/12,h[l]=_,h[c]=_/3,h[o]=($-v)/6048e5,h[a]=($-v)/864e5,h[r]=$/e,h[s]=$/t,h[i]=$/1e3,h)[p]||$,f?_:w.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),C=S.prototype;return M.prototype=C,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,S,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=y[_],M.Ls=y,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:o,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof _},f=function(t,e,n){return new _(t,n,e.$l)},h=function(t){return e.p(t)+"s"},p=function(t){return t<0},m=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},$=function(t,e){return t?p(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function p(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*u[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/o),t%=o,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=$(this.$d.years,"Y"),e=$(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=$(n,"D"),s=$(this.$d.hours,"H"),r=$(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=$(a,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||o.negative,c=s.format||r.format||o.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+o.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/u[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*u[h(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return f(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},a=[],o=0;o<t.length;o++){var l=t[o],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var f=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var p=s(h,i);i.byIndex=o,e.splice(o,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=n(r[a]);e[o].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t=[{id:"1",basePrice:1200,dateFrom:"2019-07-10T18:15:56.845Z",dateTo:"2019-07-10T18:35:56.845Z",destination:"1",isFavorite:!0,offers:["2"],type:"taxi"},{id:"2",basePrice:1100,dateFrom:"2019-06-10T21:55:56.845Z",dateTo:"2019-07-11T12:22:13.375Z",destination:"2",isFavorite:!1,offers:["5","6"],type:"bus"},{id:"3",basePrice:1500,dateFrom:"2019-07-10T07:55:56.845Z",dateTo:"2019-08-11T11:19:13.375Z",destination:"3",isFavorite:!0,offers:["7"],type:"flight"},{id:"4",basePrice:1900,dateFrom:"2019-07-10T07:55:56.845Z",dateTo:"2019-08-11T11:19:13.375Z",destination:"2",isFavorite:!1,offers:[],type:"train"}],e=[{id:"1",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"https://loremflickr.com/248/152?random=3",description:"Chamonix parliament building"},{src:"https://loremflickr.com/248/152?random=2",description:"Chamonix parliament building"},{src:"https://loremflickr.com/248/152?random=1",description:"Chamonix parliament building"}]},{id:"2",description:"London is the capital of Great Britain",name:"London",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:"Chamonix parliament building"},{src:"https://loremflickr.com/248/152?random=6",description:"Chamonix parliament building"},{src:"https://loremflickr.com/248/152?random=8",description:"Chamonix parliament building"}]},{id:"3",description:"Saint-Petersburg is the most beautiful city in the world",name:"Saint-Petersburg",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:"Chamonix parliament building"},{src:"https://loremflickr.com/248/152?random=4",description:"Chamonix parliament building"},{src:"https://loremflickr.com/248/152?random=9",description:"Chamonix parliament building"}]}],i=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:120},{id:"2",title:"Add luggage",price:130},{id:"3",title:"Add meal",price:170}]},{type:"bus",offers:[{id:"4",title:"Switch to comfort class",price:220},{id:"5",title:"Add meal",price:420},{id:"6",title:"Upgrade to a business class",price:820}]},{type:"flight",offers:[{id:"7",title:"Choose seats",price:4420},{id:"8",title:"Upgrade to a business class",price:8620},{id:"9",title:"Travel by train",price:20}]},{type:"train",offers:[]}],s=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],r={EVERYTHING:"everything",FUTURE:"future",PRESENT:"present",PAST:"past"},a={[r.EVERYTHING]:"Click New Event to create your first point",[r.FUTURE]:"There are no future events now",[r.PRESENT]:"There are no present events now",[r.PAST]:"There are no past events now"};function o(t,e,n="beforeend"){if(!(t instanceof S))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function l(t,e){if(!(t instanceof S&&e instanceof S))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}var c=n(379),u=n.n(c),d=n(795),f=n.n(d),h=n(569),p=n.n(h),m=n(565),v=n.n(m),$=n(216),_=n.n($),y=n(589),g=n.n(y),b=n(10),M={};M.styleTagTransform=g(),M.setAttributes=v(),M.insert=p().bind(null,"head"),M.domAPI=f(),M.insertStyleElement=_(),u()(b.Z,M),b.Z&&b.Z.locals&&b.Z.locals;const w="shake";class S{#t=null;constructor(){if(new.target===S)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(w),setTimeout((()=>{this.element.classList.remove(w),t?.()}),600)}}const C=[{label:"Everything",id:"filter-everything",initialValue:"everything"},{label:"Future",id:"filter-future",initialValue:"future"},{label:"Present",id:"filter-present",initialValue:"present"},{label:"Past",id:"filter-past",initialValue:"past"}];class E extends S{get template(){return`\n<form class="trip-filters" action="#" method="get">\n  ${C.map((t=>(({label:t,id:e,initialValue:n})=>`\n  <div class="trip-filters__filter">\n    <input id="${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}">\n    <label class="trip-filters__filter-label" for="${e}">${t}</label>\n  </div>`)(t))).join("\n")}\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}}const D=[{label:"Day",id:"sort-day",initialValue:"sort-day",className:"trip-sort__item--day"},{label:"Event",id:"sort-event",initialValue:"sort-event",className:"trip-sort__item--event"},{label:"Time",id:"sort-time",initialValue:"sort-time",className:"trip-sort__item--time"},{label:"Price",id:"sort-price",initialValue:"sort-price",className:"trip-sort__item--price"},{label:"Offers",id:"sort-offer",initialValue:"sort-offer",className:"trip-sort__item--offer"}];class x extends S{get template(){return`\n<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  ${D.map((t=>(({label:t,id:e,initialValue:n,className:i})=>`\n  <div class="trip-sort__item  ${i}">\n    <input id="${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${n}">\n    <label class="trip-sort__btn" for="${e}">${t}</label>\n  </div>`)(t))).join("\n")}\n</form>`}}class k extends S{get template(){return'<ul class="trip-events__list"></ul>'}}var A=n(484),T=n.n(A),Y=n(646),H=n.n(Y);T().extend(H());const O=t=>t[0].toUpperCase()+t.slice(1),F=t=>T()(t).format("YY/MM/DD"),L=t=>T()(t).format("HH:mm"),P=t=>T()(t).format("YYYY-MM-DDTHH:mm");class N extends S{#e=null;#n=null;#i=null;#s=null;constructor({point:t,destinations:e,offers:n,onEditClick:i}){super(),this.#e=t,this.#n=e,this.#i=n,this.#s=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return((t,e,n)=>{const{basePrice:i,dateFrom:s,dateTo:r,isFavorite:a}=t,o=e.find((e=>e.id===t.destination)).name,l=n.find((e=>e.type===t.type)).offers.filter((e=>t.offers.includes(e.id)));return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${c=s,T()(c).format("YYYY-MM-DD")}">${(t=>T()(t).format("MMM D"))(s)}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${t.type}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${O(t.type)} ${o}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${P(s)}">${L(s)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="${P(r)}">${L(r)}</time>\n      </p>\n      <p class="event__duration">${((t,e)=>{const n=T()(e).diff(t);return T().duration(n).format("HH[H] mm[M]")})(s,r)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${i}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n\n    ${l.map((t=>`\n      <li class="event__offer">\n        <span class="event__offer-title">${t.title}</span>\n          &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>\n    `)).join("")}\n\n    </ul>\n    <button class="event__favorite-btn ${a?"event__favorite-btn--active":""}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`;var c})(this.#e,this.#n,this.#i)}#r=t=>{t.preventDefault(),this.#s()}}class j extends S{#e=null;#n=null;#i=null;#a=null;#o=null;constructor({point:t,destinations:e,offers:n,onFormCancel:i,onFormSubmit:s}){super(),this.#e=t,this.#n=e,this.#i=n,this.#a=i,this.#o=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l),this.element.querySelector(".event__save-btn").addEventListener("click",this.#c)}get template(){return((t,e,n)=>{const{basePrice:i,dateFrom:r,dateTo:a,type:o}=t,l=e.find((e=>e.id===t.destination)),{name:c}=l||{},u=n.find((e=>e.type===t.type)).offers,d=t.id??0;return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n    ${(t=>`<div class="event__type-wrapper">\n  <label class="event__type  event__type-btn" for="event-type-toggle-${t}">\n    <span class="visually-hidden">Choose event type</span>\n    <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n  </label>\n  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${t}" type="checkbox">\n\n  <div class="event__type-list">\n    <fieldset class="event__type-group">\n      <legend class="visually-hidden">Event type</legend>\n      ${s.map((e=>`\n        <div class="event__type-item">\n          <input id="event-type-${e}-${t}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n          <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-${t}">${O(e)}</label>\n        </div>`)).join("\n")}\n    </fieldset>\n  </div>\n</div>`)(d)}\n\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-${d}">\n      ${o}\n      </label>\n      <input class="event__input  event__input--destination" id="event-destination-${d}" type="text" name="event-destination" value="${c||""}" list="destination-list-${d}">\n      <datalist id="destination-list-${d}">\n      ${e.map((t=>`<option value="${t.name}"></option>`)).join("\n")}\n      </datalist>\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-${d}">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-${d}" type="text" name="event-start-time" value="${F(r)} ${L(r)}">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-${d}">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-${d}" type="text" name="event-end-time" value="${F(a)} ${L(a)}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-${d}">\n        <span class="visually-hidden">Price</span>\n        &euro;\n      </label>\n      <input class="event__input  event__input--price" id="event-price-${d}" type="text" name="event-price" value="${i}">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">${t.id?"Delete":"Cancel"}</button>\n    ${t.id?'<button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>':""}\n  </header>\n  <section class="event__details">\n    ${u.length?((t,e)=>{const n=t.filter((t=>e.offers.includes(t.id))).map((t=>t.id));return`<section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n      ${t.map((t=>`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t.id}" type="checkbox" name="event-offer-luggage" ${n.includes(t.id)?"checked":""}>\n      <label class="event__offer-label" for="event-offer-${t.id}">\n      <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n      </label>\n    </div>`)).join("\n")}\n    </div>`})(u,t):""}\n  </section>\n    ${l?(t=>{const{description:e,pictures:n}=t||{};return`<section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${e}</p>\n      ${n.length?`<div class="event__photos-container">\n            <div class="event__photos-tape">\n              ${n.map((t=>`<img class="event__photo" src="${t.src}" alt="${t.description}">`))}\n            </div>\n          </div>`:""}\n    </section>`})(l):""}\n  </section>\n</form>\n</li>`})(this.#e,this.#n,this.#i)}#l=t=>{t.preventDefault(),this.#a()};#c=t=>{t.preventDefault(),this.#o()}}class I extends S{#u=null;constructor({filter:t}){super(),this.#u=t}get template(){return t=this.#u,`<p class="trip-events__msg">${a[t]}</p>`;var t}}const B=document.querySelector(".trip-controls__filters"),Z=document.querySelector(".trip-events"),U=new class{#d=null;#n=null;#i=null;#f=null;init(){this.#d=t,this.#n=e,this.#i=i,this.#f=Object.values(r)}get points(){return this.#d}get destinations(){return this.#n}get offers(){return this.#i}get filters(){return this.#f}};U.init();const V=new class{#h=new k;#p=null;#m=null;#v=null;#d=null;constructor(t,e,n){this.#p=t,this.#m=e,this.#v=n,this.#d=this.#v.points}init(){o(new E,this.#p),this.#$()}#$(){if(0!==this.#d.length){this.#_(),o(this.#h,this.#m);for(const t of this.#d)this.#y(t,this.#v.destinations,this.#v.offers)}else this.#g()}#_(){o(new x,this.#m)}#g(){o(new I({filter:this.#v.filters[0]}),this.#m)}#y(t,e,n){const i=t=>{"Escape"===t.key&&(t.preventDefault(),a(),document.removeEventListener("keydown",i))},s=new N({point:t,destinations:e,offers:n,onEditClick:()=>{l(r,s),document.addEventListener("keydown",i)}}),r=new j({point:t,destinations:e,offers:n,onFormCancel:()=>{a(),document.removeEventListener("keydown",i)},onFormSubmit:()=>{a(),document.removeEventListener("keydown",i)}});function a(){l(s,r)}o(s,this.#h.element)}}(B,Z,U);V.init()})()})();
//# sourceMappingURL=bundle.215adae576279b1cd99f.js.map