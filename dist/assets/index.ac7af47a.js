const e={mobilepay:!1,card:!1,contactless:!1};const t={"Ruined Childhood":!1,"El Hefe":!1,GitHop:!1,"Row 26":!1,"Hollaback Lager":!1,"Hoppily Ever After":!1,Sleighride:!1,Mowintime:!1,Steampunk:!1,"Fairy Tale Ale":!1};function o(){console.log("pay is pressed!"),localStorage.clear(),console.log(localStorage),document.querySelectorAll(".pay_alert_message").forEach((e=>{e.classList.add("hidden")})),Object.keys(t).every((e=>!t[e]))?(console.log("basket is empty!"),document.querySelector(".pay_alert_message:nth-child(4)").classList.remove("hidden")):Object.keys(e).every((t=>!e[t]))?(console.log("no payment chosen!"),document.querySelector(".pay_alert_message").classList.remove("hidden")):e.mobilepay?(console.log("mobilepay is chosen"),document.querySelector(".pay_alert_message:nth-child(3)").classList.remove("hidden")):e.contactless?(console.log("contactless is chosen"),document.querySelector(".pay_alert_message:nth-child(3)").classList.remove("hidden")):e.card&&(console.log("card is chosen"),document.querySelectorAll(".added_beers li").forEach((e=>{let t=e.dataset.field,o=document.querySelector(`.${e.className} .basket_amount`).value;console.log(t);let n=JSON.parse(localStorage.getItem("itemsArray"))||[],c={name:t,amount:o};n.push(c),localStorage.setItem("itemsArray",JSON.stringify(n)),console.log(JSON.parse(localStorage.getItem("itemsArray")))})),window.location.href="form.html")}function n(){let e=0;document.querySelectorAll(".subtotal").forEach((t=>{let o=parseInt(t.textContent);console.log(o),e+=o})),console.log("this is price count",e);let t=e.toString();console.log("price as string",t),document.querySelector(".total_price").textContent=`${e},-`,function(e){let t=e/40;console.log(t),t<1?document.querySelector(".basket_number").classList.add("hidden"):(document.querySelector(".basket_number").classList.remove("hidden"),document.querySelector(".basket_number").textContent=t)}(e)}function c(e){document.querySelector(`.${e} .plus_basket`).addEventListener("click",(()=>function(){o++,t.value=o;let c=(40*o).toString();document.querySelector(`.${e} .subtotal`).textContent=`${c},-`,document.querySelector(`.${e} .minus_basket`).style.backgroundColor="white",n()}())),document.querySelector(`.${e} .minus_basket`).addEventListener("click",(()=>function(){if(console.log("hej minus"),o>1){o--,t.value=o;let c=(40*o).toString();document.querySelector(`.${e} .subtotal`).textContent=`${c},-`,n(),o<2&&(document.querySelector(`.${e} .minus_basket`).style.backgroundColor="#f4f4f4",n())}}())),console.log(document.querySelector(`.${e} .minus_basket`));let t=document.querySelector(`.${e} .basket_amount`),o=t.value}function l(e,t){console.log("you want to remove",e),document.querySelector(`.remove_${t}`).removeEventListener("click",l),e.remove(),basket[e.dataset.field]=!1,n()}const r={"Ruined Childhood":"#75b2ff","El Hefe":"#ffda58",GitHop:"#553333","Row 26":" #f85229","Hollaback Lager":"#e8d2ae","Hoppily Ever After":"#3ccb75",Sleighride:"#e072a4",Mowintime:"#3454d1",Steampunk:"#ff912d","Fairy Tale Ale":"#ace365"};let s="flavor";function a(){s=this.dataset.field,document.querySelectorAll(".description_tabs button").forEach((e=>{e.classList.remove("chosen_desc")})),document.querySelectorAll(".desc_wrapper p").forEach((e=>{e.classList.add("hidden")})),this.classList.add("chosen_desc"),document.querySelector(`.${s}_desc`).classList.remove("hidden")}const d=document.querySelector(".amount");let u=d.value;function i(){document.querySelector(".amount").value=1,u=1}function m(){console.log(u),u++,d.value=u,document.querySelector(".minus").style.backgroundColor="white"}function y(){console.log(u),u>1&&(u--,d.value=u,u<2&&(document.querySelector(".minus").style.backgroundColor="#f4f4f4"))}window.addEventListener("DOMContentLoaded",(function(){document.querySelector("#screensaver").addEventListener("click",(function e(){document.querySelector("#screensaver").style.display="none",document.querySelector("#screensaver").removeEventListener("click",e)})),async function(){let s="https://hold-kaeft-vi-har-det-godt.herokuapp.com/beertypes",a=await fetch(s);a=await a.json(),console.log({jsonData:a});let d=document.querySelector("#beerlist_container"),u=document.querySelector("template");a.forEach((e=>{const o=u.cloneNode(!0).content,s=e.name;o.querySelector(".beer_image").src=`beer_images_with_circle/${s}.png`,o.querySelector(".beer_name").textContent=e.name,o.querySelector(".price").textContent="40,-",o.querySelector(".alc").textContent=e.alc+"% alc.",o.querySelector(".template-article").addEventListener("click",(()=>function(e,o){console.log(e);const s=document.querySelector("#singleview");s.style.display="block",s.querySelector(".sv_beer_image").src=`beer_images_shadow/${o}.png`,s.querySelector(".sv_beer_name").textContent=e.name,s.querySelector(".sv_alc").textContent=e.alc+"% alc.",s.querySelector(".description").textContent=e.description.overallImpression,s.querySelector(".sv_price").textContent="40,-",s.querySelector(".aroma_desc").textContent=e.description.aroma,s.querySelector(".appearence_desc").textContent=e.description.appearance,s.querySelector(".flavor_desc").textContent=e.description.flavor,s.querySelector(".mouthfeel_desc").textContent=e.description.mouthfeel,document.querySelector(".close_singleview").addEventListener("click",(function(){s.style.display="none",document.querySelector(".plus").removeEventListener("click",m),document.querySelector(".minus").removeEventListener("click",y),document.querySelector(".add_beer").removeEventListener("click",d),i()}));let a=e.name.split(" ").join("_").toLowerCase()+"_basket";function d(){console.log(a,"is added to basket");const o=function(e,t){console.log(e);const o=40*document.querySelector(".amount").value+",-";console.log(o);const n=document.createElement("li");n.classList.add(t),n.dataset.field=e.name;const c=document.createElement("img");c.src=`beer_images_with_circle/${e.name}.png`,n.append(c);const l=document.createElement("div"),r=document.createElement("div");n.append(l),l.append(r),["40,-",e.name].forEach((function(e){const t=document.createElement("p");console.log(t),t.textContent=e,t.classList.add("basket_text"),l.append(t)}));const s=document.createElement("p");s.textContent=o,s.classList.add("subtotal"),n.append(s);const a=document.createElement("button");a.textContent="-",a.classList.add("plus_minus","minus_basket"),r.append(a);const d=document.createElement("input"),u=document.querySelector(".amount").value;d.classList.add("basket_amount"),r.append(d),d.value=u,d.disabled=!0;const i=document.createElement("button");i.textContent="+",i.classList.add("plus_minus","plus_basket"),r.append(i);const m=document.createElement("button");return m.classList.add("remove_added_beer",`remove_${t}`),n.append(m),n}(e,a);if(t[o.dataset.field]){if(t[o.dataset.field]){console.log(a);let e=parseFloat(document.querySelector(".amount").value),t=parseFloat(document.querySelector(`.${a} .basket_amount`).value)+e;document.querySelector(`.${a} .basket_amount`).value=t;const n=40*t;console.log(o),document.querySelector(`.${a} .subtotal`).textContent=n+",-",c(a),i()}}else console.log(a),t[o.dataset.field]=!0,document.querySelector(".added_beers ul").append(o),c(a),i();n(),document.querySelector(`.remove_${a}`).addEventListener("click",(()=>{l(o,a)}))}document.querySelector(".add_beer").addEventListener("click",d),document.querySelector(".plus").addEventListener("click",m),document.querySelector(".minus").addEventListener("click",y),function(e){console.log(e.name),"GitHop"===e.name||"Mowintime"===e.name?(console.log("sercolor of baxk"),document.querySelector(".close_singleview").style.backgroundImage="url(/back_white.svg)"):document.querySelector(".close_singleview").style.backgroundImage="url(/back.svg)"}(e),function(e){for(const[t,o]of Object.entries(r))e.name===t?(document.querySelector(".add_beer").style.backgroundColor=o,document.documentElement.style.setProperty("--colored_bg",o)):!e.name===t&&(document.querySelector(".add_beer").style.backgroundColor="#343331",document.documentElement.style.setProperty("--colored_bg","#343331"))}(e)}(e,s))),d.appendChild(o)})),document.querySelectorAll(".payment_icon").forEach((t=>{t.addEventListener("click",(()=>{e[t.dataset.payment]=!0,document.querySelector(`[data-payment=${t.dataset.payment}]`).classList.add("chosen"),document.querySelectorAll(".payment_icon").forEach((o=>{t.dataset.payment!==o.dataset.payment&&(o.classList.remove("chosen"),e[o.dataset.payment]=!1)}))}))})),document.querySelector(".basket_pay").addEventListener("click",o)}(),function(){function e(){document.querySelector("#help_body").style.display="none",document.querySelector(".back").removeEventListener("click",e)}document.querySelectorAll(".description_tabs button").forEach((e=>{e.addEventListener("click",a)})),document.querySelector(".basket_icon").addEventListener("click",(function(){document.querySelector("#basket").style.display="block",document.querySelector("#help_body").style.display="none"})),document.querySelector(".help_icon").addEventListener("click",(function(){document.querySelector("#help_body").style.display="flex"})),document.querySelector(".home_icon").addEventListener("click",(function(){document.querySelector("#basket").style.display="none",document.querySelector("#help_body").style.display="none"})),document.querySelector(".help_logo").addEventListener("click",(function(){document.querySelector("#help_body").style.display="flex",document.querySelector(".back").addEventListener("click",e)}))}()}));