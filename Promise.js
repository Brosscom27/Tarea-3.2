const datos = [{
    id: 123,
    nombre: "Mario"
},
{
    id: 456,
    nombre: "Tifanny"
},
{
    id: 789,
    nombre: "Rummy"
}];


function pedirDatos(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const generarError = Math.random() > 0.5;
            if(!generarError){
                resolve(datos);
            } else{
                reject("Error");
            }
        }, 1000);
    });
};
pedirDatos()
.then(resultado =>{
    console.log(resultado);
})
.catch(error =>{
    console.log(error);
})
.finally(()=>{
    console.log("Promesa finalizada");
});