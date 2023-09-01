import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topic";
//used to update drinks
export default async function PUT (request, {params}){
    const {id} = params;
    const {newDrink: drink, newDescription: description} = await request.json()
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {drink, description})
    return NextResponse.json({message: "drink updated"}, {status: 200});

}

//used to get drinks by id
export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id : id})
    return NextResponse.json({topic}, {status: 200})
}