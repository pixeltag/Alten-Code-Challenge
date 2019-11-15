export const customers = [
    {
        name: "name1",
        _id: 1
    },
    {
        name: "name2",
        _id: 2
    }
];

export const customer = [1]

export const vehicles = [
    {
        name: "BMW",
        user_id: 1,
        status: false
    },
    {
        name: "Aston Martin",
        user_id: 2,
        status: true
    }
];

export const combinedArray = [
    {
        name: "name1",
        _id: 1,
        vehicles: [
            {
                name: "BMW",
                user_id: 1,
                status: false
            }
        ]
    },
    {
        name: "name2",
        _id: 2,
        vehicles: [
            {
                name: "Aston Martin",
                user_id: 2,
                status: true
            }
        ]
    }
];

export const filteredDataByCustomer = [
    {
        name: "name1",
        _id: 1,
        vehicles: [
            {
                name: "BMW",
                user_id: 1,
                status: false
            }
        ]
    }
]

export const filteredDataByStatusTrue = [
    {
        name: "name1",
        _id: 1,
        vehicles: []
    },
    {
        name: "name2",
        _id: 2,
        vehicles: [
            {
                name: "Aston Martin",
                user_id: 2,
                status: true
            }
        ]
    }
]



export const customerData = [
    {
        name: "name1",
        address: "address1",
        vehicles: [
            {
                name: "BMW",
                user_id: 1,
                status: false
            },
            {
                name: "Aston Martin",
                user_id: 2,
                status: true
            }
        ]
    }
];


export const isolatedData = [
    {
        name: "name1",
        address: "address1",
        vehicle:
            {
                name: "BMW",
                user_id: 1,
                status: false
            }

    },
    {
        name: "name1",
        address: "address1",
        vehicle:
            {
                name: "Aston Martin",
                user_id: 2,
                status: true
            }

    }
];