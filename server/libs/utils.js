// change  digging to the vehicls Array
const statusChangesRandomly = oldData => {
    if(oldData && oldData.vehicles) {
        oldData.vehicles.forEach(data => {
            data.status = Boolean(Math.round(Math.random()));
        });
    }
    return oldData;
}

module.exports = statusChangesRandomly;