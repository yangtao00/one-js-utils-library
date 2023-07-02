import t from"dayjs";const r=(r,o="YYYY-MM-DD")=>{if(!(r.toString().length<13))return t(r).format(o)},o=t=>/^1[3456789]\d{9}$/.test(t);export{r as timestamp2Date,o as validatePhone};
