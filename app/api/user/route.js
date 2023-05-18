import User from "@/model/user";
import { connectToDb } from "@/utils/database";

export const POST = async (req, res) => {
    const {name, email, message} = await req.json();
    console.log(name);
    try {
        await connectToDb();
        const userMessage = await User.create({ name, email, message });
        return new Response(JSON.stringify(userMessage), { status: 201 })
    } catch (error) {
        return new Response("Failed to create user", { status: 500 });
    }
}