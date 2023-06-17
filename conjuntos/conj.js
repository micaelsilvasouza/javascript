document.write("<ul>")
letras.forEach((letra)=>{
    document.write("<li>forEach: "+letra+"</li>")
});

for(let letra of letras.values()){
    document.write("<li>for values: "+letra+"</li>")
}