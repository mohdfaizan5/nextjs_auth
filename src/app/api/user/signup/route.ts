import { DBconfig } from "@/DBconfig/DBconfig";
import User from "@/models/user.models";
import { NextRequest, NextResponse } from "next/server";

DBconfig();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Take data
    // data validation TODO:❌ Implement validation or any validation library like zod
    // check if email already exist
    // if so then return response
    // else create new email (document)
    // once created send response

    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return NextResponse.json([
        { status: 400 },
        { message: "Email already exist" },
      ]);
    }

    const newUser = new User({
      email,
      password, // TODO:❌ Make password first hashed
    });

    const createdUser = await newUser.save();

    // TODO: Send mail

    return NextResponse.json({ message: "hi", createdUser });
    
  } catch (error) {
    return NextResponse.json([{ status: 500 }, { message: error }]);
  }
}

export function GET(request: NextRequest) {
  // console.log("by");
  return NextResponse.json({ message: "hi from get" });
}
