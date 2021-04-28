import HttpCliente from '../../src/componentes/Servicios/HttpCLiente'

export const getProductos = () =>{
    return new Promise((resolve, eject) =>
    HttpCliente.get('/api/producto').then ( response =>{
        resolve(response);
    })
        )
};