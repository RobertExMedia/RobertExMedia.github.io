const s=e=>`"${String(e??"").replace(/"/g,'""')}"`,d=(e,c,n)=>{const a=[c.map(s).join(","),...n.map(l=>l.map(s).join(","))],r=new Blob([a.join(`
`)],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(r),t=document.createElement("a");t.href=o,t.download=e.endsWith(".csv")?e:`${e}.csv`,t.click(),URL.revokeObjectURL(o)};export{d};
