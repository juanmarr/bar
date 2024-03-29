import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";
//next.js route handlers w/ mongoose
export async function POST(request){
    const {drink, description} = await request.json();
    await connectMongoDB();
    await Topic.create({drink, description});
    return NextResponse.json({message: "order Created"}, {status: 201});

}

//this route handler returns all the drinks form mongodb
export async function GET(){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics})

}


export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id); //this is a mongoose built in function
    return NextResponse.json({message:'Topic deleted'}, {status: 200})

}