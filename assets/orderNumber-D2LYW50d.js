function t(){const r=new Uint32Array(1);return crypto.getRandomValues(r),`ZEB-${String(r[0]%1e7).padStart(7,"0")}`}export{t as c};
