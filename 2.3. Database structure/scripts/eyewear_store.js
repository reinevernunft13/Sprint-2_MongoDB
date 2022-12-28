// DROPS DB IF ALREADY EXISTS AND CREATES NEW DB
db = db.getSiblingDB('eyewear_store');
db.dropDatabase();
db = db.getSiblingDB('eyewear_store');

// CREATES COLLECTIONS
db.createCollection('suppliers');
db.createCollection('customers');

// INSERTS DATA INTO SUPPLIERS COLLECTION
db.suppliers.insert([
        {
            _id: ObjectId("000000000000000000000001"),
            name: 'Cat-Glasses, S.L',
            phone: '+34932155667',
            fax: '+34932155668',
            TIN: '12345678A',
            address: {
                street: 'C/ Balmes',
                number: '13',
                floor: 'none',
                door: 'none',
                town: 'Barcelona',
                zip: '08036',
                country: 'Spain'
            }
        },
        {
            _id: ObjectId("000000000000000000000002"),
            name: 'Eyewear Mediterranean',
            phone: '+34932157668',
            fax: '+34932157669',
            TIN: '12345678A',
            address: {
                street: 'C/ Mallorca',
                number: '426',
                floor: 'none',
                door: 'none',
                town: 'Barcelona',
                zip: '08028',
                country: 'Spain'
            }
        },
        {
            _id: ObjectId("000000000000000000000003"),
            name: 'Visual Spain, S.A.',
            phone: '+34934150089',
            fax: '+34934150091',
            TIN: '12345678A',
            address: {
                street: 'C/ Maragall',
                number: '27',
                floor: 'none',
                door: 'none',
                town: 'Barcelona',
                zip: '08026',
                country: 'Spain'
            }
        },
        {
            _id: ObjectId("000000000000000000000004"),
            name: 'Paco García & Hnos, S.L',
            phone: '+34934219887',
            fax: '+34934219887',
            TIN: '12345678A',
            address: {
                street: 'C/ Sants',
                number: '55',
                floor: 'none',
                door: 'none',
                town: 'Barcelona',
                zip: '08015',
                country: 'Spain'
            }
        }
]);
//INSERTS DATA INTO CUSTOMERS COLLECTION
db.customers.insert([
        {
            _id: ObjectId("000000000000000000000011"),
            name: 'María Jiménez',
            zip: '08010',
            phone: '977771233',
            email: 'soylamari@gmail.com',
            register_date: '2017-01-01',
            customer_referral: false,
            eyewear: {
                brand: 'Rayban',
                lens: {
                    left_eye: {
                        graduation: 0.50,
                        color: 'transparent'
                    },
                    right_eye: {
                        graduation: 2.50,
                        color: 'transparent'
                    }
                },
                frame_type: 'rimless',
                frame_color: 'none',
                value: 200,
                sale_employee: {
                    name: 'Javier Arenas',
                },
                supplier: {
                    $ref: 'suppliers',
                    $id: ObjectId("000000000000000000000001")
                }
            }
        },
        {
            _id: ObjectId("000000000000000000000012"),
            name: 'Antonia Moreno',
            zip: '08010',
            phone: '977771233',
            email: 'toni.moreno@gmail.com',
            register_date: '2021-02-10',
            customer_referral: {
                $id: ObjectId("000000000000000000000011"),
                $ref: 'customers'
            },
            eyewear: {
                brand: 'Tous',
                lens: {
                    left_eye: {
                        graduation: 0.75,
                        color: 'blue'
                    },
                    right_eye: {
                        graduation: 1.25,
                        color: 'blue'
                    }
                },
                frame_type: 'plastic',
                frame_color: 'black',
                value: 200,
                sale_employee:{
                    name: 'Alberto Casero',
                },
                supplier: {
                    $ref: 'suppliers',
                    $id: ObjectId("000000000000000000000001")
                }
            }
        },
        {
            _id: ObjectId("000000000000000000000013"),
            name: 'Joana Vives',
            zip: '08010',
            phone: '977771233',
            email: 'joana-vives@gmail.com',
            register_date: '2022-08-10',
            customer_referral: {
                $id: ObjectId("000000000000000000000012"),
                $ref: 'customers'
            },
            eyewear: {
                brand: 'Rayban',
                lens: {
                    left_eye: {
                        graduation: 0.50,
                        color: 'blue'
                    },
                    right_eye: {
                        graduation: 0.75,
                        color: 'blue'
                    }
                },
                frame_type: 'metal',
                frame_color: 'black',
                value: 200,
                sale_employee:{
                    name: 'Alberto Casero',
                },
                supplier: {
                    $ref: 'suppliers',
                    $id: ObjectId("000000000000000000000001")
                }
            }
        },
        {
            _id: ObjectId("000000000000000000000014"),
            name: 'Francisco Alcoberro',
            zip: '08010',
            phone: '977771233',
            email: 'fralcoberro@gmail.com',
            register_date: '2022-09-10',
            customer_referral: {
                $id: ObjectId("000000000000000000000013"),
                $ref: 'customers'
            },
            eyewear: {
                brand: 'Gucci',
                lens: {
                    left_eye: {
                        graduation: 0.50,
                        color: 'transparent'
                    },
                    right_eye: {
                        graduation: 0.75,
                        color: 'transparent'
                    }
                },
                frame_type: 'plastic',
                frame_color: 'red',
                value: 200,
                sale_employee:{
                    name: 'Paula Casas',
                },
                supplier: {
                    $ref: 'suppliers',
                    $id: ObjectId("000000000000000000000003")
                }
            }
        }
    ]);
        
