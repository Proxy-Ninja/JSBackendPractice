/*
import mongoose from "mongoose";

import todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean
        default: false
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'sudTodo'
        }
    ] //Array of SubTodos
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)
*/