const buscarAnagrama = (palabra1, palabra2) =>{
  if (palabra1.length !== palabra2.length) return false;
  
  let secuenciaLetras = {}
  const secuenciaLetras2 ={}

  for (const letra of palabra1){
    secuenciaLetras[letra] = (secuenciaLetras[letra] || 0)  + 1
  }
  
  for(const letra of palabra2){
     secuenciaLetras2[letra] = (secuenciaLetras2[letra] || 0) + 1
  }

  for(const clave in secuenciaLetras ){
    if(!secuenciaLetras2.hasOwnProperty(clave)) return false

    if(secuenciaLetras[clave] !== secuenciaLetras2[clave]) return false  
  }
  
  return true
}

console.log(buscarAnagrama('fla','lfa'))

