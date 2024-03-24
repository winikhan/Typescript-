function car_info( model:string, manufacturer: string, ...additional_information: {[key : string]: any} []){

    let cardetails = {

        model, 
        manufacturer,
        ...Object.assign({}, ...additional_information)

}

return cardetails


};
 let details = car_info('Mercedes Benz', 'S-Class', {color: 'Graphite Grey'}, {features: ["Centre Airbag", "Active Brake Assist", "Direct steering"]} );

 console.log(details)