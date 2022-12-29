// DROPS DB IF ALREADY EXISTS AND CREATES NEW DB
db = db.getSiblingDB('pizza_store');
db.dropDatabase();
db = db.getSiblingDB('pizza_store');

// CREATES DB COLLECTIONS
db.createCollection('customers');
db.createCollection('products');
db.createCollection('stores');

// INSERTS DATA INTO CUSTOMERS COLLECTION
db.customers.insertMany([
        {
            _id: ObjectId("000000000000000000000001"),
            f_name: 'Pepe',
            l_name:'Rodriguez',
            address: {
                street: 'C/ Cáceres',
                number: '16',
                floor: '31',
                door: 'A',
                zip: '08017',
                town: 'Barcelona',
                province:  'Barcelona',
                }
            },
        {
            _id: ObjectId("000000000000000000000002"),
            f_name: 'Antonia',
            l_name:'Jiménez',
            address: {
                street: 'C/ Provença',
                number: '168',
                floor: '3',
                door: 'C',
                zip: '08036',
                town: 'Barcelona',
                province:  'Barcelona',
                }
        },
        {
            _id: ObjectId("000000000000000000000003"),
            f_name: 'Paquita',
            l_name:'Cano',
            address: {
                street: 'C/ Telégrafo',
                number: '33',
                floor: '4',
                door: 'A',
                zip: '08028',
                town: 'Barcelona',
                province:  'Barcelona',
                }
        },
        {
            _id: ObjectId("000000000000000000000004"),
            f_name: 'Serafina',
            l_name: 'Casas',
            address: {
                street: 'C/ Francisco de Quevedo',
                number: '28',
                floor: '7',
                door: 'D',
                zip: '08091',
                town: 'Hospitalet de Llobregat',
                province:  'Barcelona',
                }
            }
    ]
);

// INSERTS DATA INTO PRODUCTS COLLECTION
db.products.insertMany([
        {
            _id: ObjectId("000000000000000000000011"),
            item_type:'pizza',
            item_name: 'Quattro formaggi',
            description: 'description for pizza quattro formaggi',
            image: 'URL_1',
            value: 13,
            category: 'popular'
        },
        {
            _id: ObjectId("000000000000000000000012"),
            item_type:'pizza',
            item_name: 'margherita',
            description: 'description for pizza margherita',
            image: 'URL_2',
            value: 12,
            category: 'classic'
        },
        {
            _id: ObjectId("000000000000000000000013"),
            item_type:'pizza',
            item_name: 'pepperoni',
            description: 'description for pizza pepperoni',
            image: 'URL_3',
            value: 13.5,
            category: 'american'
        },
        {
            _id: ObjectId("000000000000000000000014"),
            item_type:'pizza',
            item_name: 'frutti di mare',
            description: 'description for frutti di mare',
            image: 'URL_4',
            value: 15,
            category: 'seafood'
        },
        {
            _id: ObjectId("000000000000000000000015"),
            item_type:'burger',
            item_name: 'cheese burger',
            description: 'description for cheese burger',
            image: 'URL_5',
            value: 12,
        },
        {
            _id: ObjectId("000000000000000000000016"),
            item_type:'drink',
            item_name: 'soda',
            description: 'description for soda',
            image: 'URL_6',
            value: 2
        },
        {
            _id: ObjectId("000000000000000000000017"),
            item_type:'drink',
            item_name: 'beer',
            description: 'description for beer',
            image: 'URL_7',
            value: 3
        },
        {
            _id: ObjectId("000000000000000000000018"),
            item_type:'drink',
            item_name: 'lambrusco',
            description: 'description for lambrusco',
            image: 'URL_8',
            value: 15
        },
        {
            _id: ObjectId("000000000000000000000019"),
            item_type:'drink',
            item_name: 'bottled water',
            description: 'description for bottled',
            image: 'URL_9',
            value: 5
        },
        {
            _id: ObjectId("000000000000000000000020"),
            item_type:'drink',
            item_name: 'white wine',
            description: 'description for white wine',
            image: 'URL_10',
            value: 18
        },
    ]);

// INSERTS DATA INTO STORES COLLECTION
db.stores.insertMany([
        {
            _id: ObjectId("000000000000000000000031"),
            address: {
                street: 'C/ Alegria',
                number: '123',
                floor: 'none',
                door: 'none',
                zip: '08233',
                town: 'Santa Coloma de Gramenet',
                province: 'Barcelona'
            },
            orders: [{

                    _id: ObjectId("000000000000000000000041"),
                    date: '11/12/2021',
                    time: '22:01',
                    customer: {
                        $ref: 'customers',
                        $id: ObjectId("000000000000000000000004")
                    },
                    order_type: 'pick-up',
                    order_items: [{

                        $ref: 'products',
                        $id: ObjectId("000000000000000000000015"),
                        quantity: 1,
                        
                    },
                    {
                        $ref: 'products',
                        $id: ObjectId("000000000000000000000017"),
                        quantity: 1,
                    }],
                    value_total: 17
                },
                {
                    _id: ObjectId("000000000000000000000044"),
                    date: '16/12/2021',
                    time: '22:01',
                    customer: {
                        $ref: 'customers',
                        $id: ObjectId("000000000000000000000001")
                    },
                    order_type: 'delivery',
                    order_items: [{

                        $ref: 'products',
                        $id: ObjectId("000000000000000000000011"),
                        quantity: 1,
                    },
                    {
                        $ref: 'products',
                        $id: ObjectId("000000000000000000000017"),
                        quantity: 1,
                    }],
                    value_total: 18
                }],
            employees: [{

                    _id: ObjectId("000000000000000000000051"),
                    f_name: 'Sergio',
                    l_name: 'Leone',
                    TIN: '12345678A',
                    phone: '+34666948231',
                    role: 'cook'
                },
                {
                    _id: ObjectId("000000000000000000000052"),
                    f_name: 'Alberto',
                    l_name: 'González',
                    TIN: '622098765P',
                    phone: '+34611943231',
                    role: 'delivery driver'
                },
                {
                    _id: ObjectId("000000000000000000000053"),
                    f_name: 'Raúl',
                    l_name: 'Romo',
                    TIN: '12341234Z',
                    phone: '+34600111222',
                    role: 'delivery driver'
                },
                {
                    _id: ObjectId("000000000000000000000054"),
                    f_name: 'Javier',
                    l_name: 'Segura',
                    TIN: '12347777H',
                    phone: '+34611222000',
                    role: 'delivery driver'
                }],
            },
            {
            _id: ObjectId("000000000000000000000032"),
            address: {
                street: 'C/ Tarragona',
                number: '21',
                floor: 'none',
                door: 'none',
                zip: '08036',
                town: 'Barcelona',
                province: 'Barcelona'
            },
            orders: [{
                    _id: ObjectId("000000000000000000000042"),
                    date: '11/12/2021',
                    time: '21:01',
                    customer: {
                        $ref: 'customers',
                        $id: ObjectId("000000000000000000000002")
                    },
                    order_type: 'delivery',
                    order_items: [{

                            $ref: 'products',
                            $id: ObjectId("000000000000000000000012"),
                            quantity: 1,
                        },
                        {
                            $ref: 'products',
                            $id: ObjectId("000000000000000000000013"),
                            quantity: 1,
                        },
                        {
                            $ref: 'products',
                            $id: ObjectId("000000000000000000000016"),
                            quantity: 1,
                        }],

                    value_total: 27.50
                },
                {
                    _id: ObjectId("000000000000000000000043"),
                    date: '13/12/2021',
                    time: '20:59',
                    customer: {
                        $ref: 'customers',
                        $id: ObjectId("000000000000000000000003")
                    },   
                    order_type: 'pick-up',
                    order_items: [{

                            $ref: 'products',
                            $id: ObjectId("000000000000000000000014"),
                            quantity: 1,
                            
                        },
                        {
                            $ref: 'products',
                            $id: ObjectId("000000000000000000000016"),
                            quantity: 1,

                        }],
                        value_total: 17
                }],
                employees: [{

                    _id: ObjectId("000000000000000000000055"),
                    f_name: 'Luigi',
                    l_name: 'Rossi',
                    TIN: '12334444A',
                    phone: '+34699000999',
                    role: 'cook'
                },
                {
                    _id: ObjectId("000000000000000000000056"),
                    f_name: 'Maria',
                    l_name: 'Prats',
                    TIN: '999111888J',
                    phone: '+34611000001',
                    role: 'delivery driver'
                },
                {
                    _id: ObjectId("000000000000000000000057"),
                    f_name: 'Ana',
                    l_name: 'Romerales',
                    TIN: '12377777Z',
                    phone: '+34600876123',
                    role: 'delivery driver'
                },
                {
                    _id: ObjectId("000000000000000000000058"),
                    f_name: 'Florencia',
                    l_name: 'Malaspina',
                    TIN: '16781234Y',
                    phone: '+34611222333',
                    role: 'cook'
                }]
        }
    ]);

                    
