import{A as a}from"./chunk-MUYU46A6.js";var u=(()=>{let t=class t{transform(n){let e=new Date(n),i=e.getDate().toString().padStart(2,"0"),s=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getFullYear().toString().slice(2);return`${i}/${s}/${o}`}};t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a({name:"dateFormat",type:t,pure:!0,standalone:!0});let r=t;return r})(),p=(()=>{let t=class t{transform(n){return n?n.split("Z")[0].substr(0,5):"-"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a({name:"timeFormat",type:t,pure:!0,standalone:!0});let r=t;return r})();export{u as a,p as b};