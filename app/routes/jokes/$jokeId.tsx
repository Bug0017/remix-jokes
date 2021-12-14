import { LoaderFunction, useLoaderData } from "remix"
import { db } from "~/utils/db.serve"

export const loader: LoaderFunction = async ({params}) => {
    const data = await db.joke.findUnique({where: {
        id: params.jokeId
    } })

    console.log(data)
    return data
}

export default function JokeRoute(){
    
    const {content} = useLoaderData();
    return <div>{content && content}</div>;
}