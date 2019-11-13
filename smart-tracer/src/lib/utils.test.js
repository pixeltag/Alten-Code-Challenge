import { combineCustomersWithVehicles, getVehiclesNum } from "./utils";

const customers = [
    {
        name: "name1",
        _id: 1
    },
    {
        name: "name2",
        _id: 2
    }
];

const vehicles = [
    {
        name: "BMW",
        user_id: 1
    },
    {
        name: "Aston Martin",
        user_id: 2
    }
];

const combinedArray = [
    {
        name: "name1",
        _id: 1,
        vehicles: [
            {
                name: "BMW",
                user_id: 1
            }
        ]
    },
    {
        name: "name2",
        _id: 2,
        vehicles: [
            {
                name: "Aston Martin",
                user_id: 2
            }
        ]
    }
];

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

it("returns num of vehicles if pass customers array", () => {
    let result = getVehiclesNum(combinedArray);
    expect(result).toBe(2);
});

it("returns 0 if there is no customers passed", () => {
    let result = getVehiclesNum(customers);
    expect(result).toBe(0);
});
