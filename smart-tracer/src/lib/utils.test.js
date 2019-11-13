import { combineCustomersWithVehicles } from "./utils";

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

it("returns false if there are no arrays", () => {
    let result = combineCustomersWithVehicles([], []);
    expect(result).toBe(false);
});

it("return false if there are no any parameters passed", () => {
    let result = combineCustomersWithVehicles();
    expect(result).toBe(false);
});

it("return combined object - the happy path", () => {
    let result = combineCustomersWithVehicles(customers, vehicles);
    console.log(result);
    expect(result).toEqual(combinedArray);
});
