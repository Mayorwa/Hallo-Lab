const service = {
    id: {
        type: Number,
        autoIncrement: true,
        required: [true, 'Please tell us your id!'],
    },
    type: {
        type: String,
        enum: ['banner', 'flyer'],
        default:'banner',
        required: [true, 'Please provide a type'],
    },
};

const order = {
    id: {
        type: Number,
        autoIncrement: true,
        required: [true, 'Please tell us your name!'],
    },
    service_id:{
        type: service.type
    },
    customer_id:{
        type: customer.id
    },
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    quantity: {
        type: Number,
        min: 10,
        required: [true, 'Please provide a scale'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    retainer_status: {
        type: String,
        enum: ['project', "retainer"],
        default:'project',
        required: [true, 'Please provide a type'],
    },
    amount:{

    },
    duration: {
      type: Number,
      null: true
    },
    active: {

    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
};

const offices ={
    id: {
        type: Number,
        autoIncrement: true,
        required: [true, 'Please tell us your name!'],
    },
    state: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    country: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    phone: {
        type: Number,
        required: [true, 'Please provide a phone number'],
    },
    address: {
        type: Text,
        required: [true, 'Please provide an address'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
};

const employees = {
    id: {
        type: Number,
        autoIncrement: true,
        required: [true, 'Please tell us your name!'],
    },
    name: {
        type: String,
        required: [true, 'An employee  need a name!'],
    },
    state: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    country: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    phone: {
        type: Number,
        required: [true, 'Please provide a phone number'],
    },
    address: {
        type: Text,
        required: [true, 'Please provide an address'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
};
const customer = {
    id: {
        type: Number,
        autoIncrement: true,
        required: [true, 'Please tell us your name!'],
    },
    name: {
        type: String,
        required: [true, 'An employee  need a name!'],
    },
    state: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    country: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    phone: {
        type: Number,
        required: [true, 'Please provide a phone number'],
    },
    address: {
        type: Text,
        required: [true, 'Please provide an address'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
};
