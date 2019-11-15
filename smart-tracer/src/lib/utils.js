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

// filter by customer IDs
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

// filter by status
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

// Isolate the customer with each his own car in sparated object
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