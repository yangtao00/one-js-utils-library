"use strict";var t=require("dayjs");exports.timestamp2Date=(e,r="YYYY-MM-DD")=>{if(!(e.toString().length<13))return t(e).format(r)},exports.validatePhone=t=>/^1[3456789]\d{9}$/.test(t);
