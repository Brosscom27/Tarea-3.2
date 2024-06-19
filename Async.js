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


function esperar(ms){
    return new Promise (resolve => setTimeout(resolve, ms));
};

async function pedirDatos(){
    try {
        const respuesta = await esperar(2000);
        const generarError = Math.random() > 0.5

        if(generarError){
            throw new Error("Error al cargar los datos");
        }

        console.log(datos)
    } catch (error) {
        console.log("Error al obtener los datos:", error)
    }
};

pedirDatos();