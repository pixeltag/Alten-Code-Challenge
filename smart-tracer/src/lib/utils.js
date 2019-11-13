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
    return false;
}
