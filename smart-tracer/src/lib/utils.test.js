import {
    combineCustomersWithVehicles,
    getVehiclesNum,
    filterByCustomer,
    filterByStatus,
    isolateVehicles
 } from "./utils";

import {
    customers,
    vehicles,
    combinedArray,
    filteredDataByCustomer,
    filteredDataByStatusTrue,
    customerData,
    isolatedData
} from "./mocks/fakeData";

describe('testing suite for combine Customers With Vehicles', () => {
    it("returns undefined if there are no arrays", () => {
        let result = combineCustomersWithVehicles([], []);
        expect(result).toBe(undefined);
    });

    it("returns undefined if there are no any parameters passed", () => {
        let result = combineCustomersWithVehicles();
        expect(result).toBe(undefined);
    });

    it("returns combined object - the happy path", () => {
        let result = combineCustomersWithVehicles(customers, vehicles);
        expect(result).toEqual(combinedArray);
    });

})

// getVehiclesNum
describe('testing for get Vehicles Number counting', () => {
    it("returns num of vehicles if pass customers array", () => {
        let result = getVehiclesNum(combinedArray);
        expect(result).toBe(2);
    });

    it("returns 0 if there is no customers passed", () => {
        let result = getVehiclesNum(customers);
        expect(result).toBe(0);
    });
})

// filterByCustomer
describe('testing for Filter by Customers func', () => {
  it('it returns only the customer with id 1 selected ' , () => {
      let result = filterByCustomer(combinedArray , [1]);
      expect(result).toEqual(filteredDataByCustomer);
  });

  it('it returns only the customers with id 1 and 2 selected ' , () => {
    let result = filterByCustomer(combinedArray , [1,2]);
    expect(result).toEqual(combinedArray);
    });

    it('it returns only all the customers if empty array passed ' , () => {
        let result = filterByCustomer(combinedArray , []);
        expect(result).toEqual(combinedArray);
    });

    it('it returns the default data if non object type passed ' , () => {
        let result = filterByCustomer(combinedArray , "testing");
        expect(result).toEqual(combinedArray);
    });

    it('it returns the false if the data we need to filter is non object type or the length equal 0 ' , () => {
        let result = filterByCustomer([] , [1,2]);
        expect(result).toBe(false);
    });

});


// filterByStatus
describe('testing for Filter by vehicles status func', () => {

    it('it returns the vehicles with status true - the happy path' , () => {
        let result = filterByStatus(combinedArray , true);
        expect(result).toEqual(filteredDataByStatusTrue);
    });

    it('it returns all the vehicles with status false - the happy path' , () => {
        let result = filterByStatus(combinedArray , false);
        expect(result).toEqual(combinedArray);
    });

    it('it returns all the vehicles if not passed bool type for status param' , () => {
        let result = filterByStatus(combinedArray , "test");
        expect(result).toEqual(combinedArray);
    });

})


// isolateVehicles
describe('Testing for isolated vehicles combining with its customer fun', () => {

    it('it returns two objects with the same customer, different object of vehicles' , () => {
        let result = isolateVehicles(customerData);
        expect(result).toEqual(isolatedData);
    })

    it('it returns undefind if passed empty object' , () => {
        let result = isolateVehicles([]);
        expect(result).toEqual(undefined);
    })

    it('it returns undefind if not passed type object' , () => {
        let result = isolateVehicles([]);
        expect(result).toEqual(undefined);
    })

})
