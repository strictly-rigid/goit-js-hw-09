const e={form:document.querySelector("form")};function o(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.form.addEventListener("submit",(t=>{t.preventDefault();const{delay:n,step:l,amount:r}=t.target.elements;let s=Number(n.value);for(let e=1;e<=Number(r.value);e+=1)o(e,s).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),s+=Number(l.value);e.form.reset()}));
//# sourceMappingURL=03-promises.f331a400.js.map