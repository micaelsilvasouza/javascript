document.write("<ul>")
frutas.forEach((quant, fruta)=>{
    document.write("<li>forEach: "+fruta+" - "+ quant+ "</li>")
});

for(let fruta of frutas.entries()){
    document.write("<li>for values: "+fruta[0]+" - "+fruta[1] +"</li>")
}