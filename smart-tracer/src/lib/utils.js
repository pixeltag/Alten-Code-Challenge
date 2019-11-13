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
