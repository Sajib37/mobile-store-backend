import mongoose from "mongoose";
import { Tinventory, Tmobile, Tvariant } from "./mobile.interface";
const { Schema } = mongoose;

const VariantSchema = new Schema<Tvariant>({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});

const inventorySchema = new Schema<Tinventory>({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});

const MobileSchema = new Schema<Tmobile>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        tags: {
            type: [String],
            required: true,
        },
        variants: {
            type: [VariantSchema],
            required: true,
        },
        inventory: inventorySchema,
    },
    { timestamps: true }
);

export const mobileModel = mongoose.model<Tmobile>("mobile", MobileSchema);
