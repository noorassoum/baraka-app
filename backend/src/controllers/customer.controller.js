import Customer from "../models/customer.model.js";
import { generateToken } from "../utils/generateToken.js";


// Register customer
export const registerCustomer = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const exists = await Customer.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const customer = await Customer.create({ name, email, password });

        return res.status(201).json({
            message: "Customer registered successfully",
            customer: {
                _id: customer._id,
                name: customer.name,
                email: customer.email,
            },
            token: generateToken(customer._id, "customer"),
        });
    } catch (error) {
        console.error("REGISTER CUSTOMER ERROR:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Login customer
export const loginCustomer = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1) Find customer + include password explicitly
        const customer = await Customer.findOne({ email }).select("+password");

        if (!customer) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // 2) Compare password
        const isMatch = await customer.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // 3) Return clean customer + token
        res.json({
            message: "Customer logged in successfully",
            customer: {
                _id: customer._id,
                name: customer.name,
                email: customer.email,
            },
            token: generateToken(customer._id),
        });

    } catch (error) {
        console.log("LOGIN CUSTOMER ERROR:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get logged-in customer
export const getCustomerProfile = async (req, res) => {
    res.json(req.customer);
};
