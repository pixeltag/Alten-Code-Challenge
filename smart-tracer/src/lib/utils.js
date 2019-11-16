// func for combine the customers array with the vehicls array based on `user_id` property
// it is accepting the customers and the vehicls array
export function combineCustomersWithVehicles(customers, vehicles) {
    if (customers && customers.length > 0 && vehicles && vehicles.length > 0) {
        let merged = [];
        customers.forEach(customer => {
            merged.push({
                ...customer,
                vehicles: [...vehicles.filter(vehicle => vehicle.user_id === customer._id)]
            });
        });
        return merged;
    }
    return;
}

// func to get the number of existing vehicles
// it is accepting the combined array of customers and its vehicles
export function getVehiclesNum(customersData) {
    if (customersData && customersData.length > 0) {
        let vehicleNum = 0;
        customersData.forEach(customer => {
            if (customer.vehicles && customer.vehicles.length > 0) {
                vehicleNum += customer.vehicles.length;
            }
        });
        return vehicleNum;
    }
    return 0;
}

// func to filter the combined array by specific customer or multi customers
// it's accepting the whole data array and the second arrg is array of selected ID
export function filterByCustomer(data , customers) {
    if(data.length > 0 && typeof data == "object") {
        if(customers && typeof customers == "object" && customers.length > 0 ) {
            let filteredCustomers = data.filter(d => customers.includes(d._id))
            return filteredCustomers;
        }
        return data;
    }
    return false;
}

//  func to filter the combined array by specific vehicles status
// it's accepting the whole data and the second arrg is bool
export function filterByStatus(data , status) {
    if(typeof status == "boolean") {
        if(data && data.length > 0) {
            let filteredVehicles = data.filter(d =>  {
               return d.vehicles =  d.vehicles.filter(v => {
                   return v.status === status;
               })
            });
            return filteredVehicles;
        }
    }
    return data;
}

// func to isolate the customer with each his own vehicles in sparated object
// it's accepting the whole combined array
export function isolateVehicles(data) {
    if(data && data.length > 0 && typeof data == "object") {
        let returnData = [];
        data.map(d =>  d.vehicles.forEach(v => {
            returnData.push({ "name": d.name , "address": d.address , "vehicle" : v})
        }));
        return returnData;
    }
    return;
}