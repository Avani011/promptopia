import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, {params}) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate('creator');
        
        
        return new Response(JSON.stringify(prompt), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}

export const PATCH = async (req, {params}) => {

    try {
        await connectToDB();

        const {prompt, tag} = await req.json();
        const existingPrompt = await Prompt.findById(params.id);

        if(!prompt) return new Response("prompt not found", {status: 404 })

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status: 200})
    } catch (error) {
        return new Response("Failed to update the prompt", {status: 500})
    }
}

export const DELETE = async (req, {params}) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndDelete(params.id);

        return new Response("Prompt deleted Successfully", {status: 200})
    } catch (error) {
        return new Response(" Failed to delete the Prompt", {status: 500})
    }
}