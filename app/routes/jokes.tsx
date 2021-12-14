import { Outlet, LoaderFunction, useLoaderData, Link } from "remix";
import { tw } from "twind";
import { db } from "~/utils/db.serve";


export let loader: LoaderFunction = async() => {
  let jokes = await db.joke.findMany();
  let data = {jokes}
  return data;
}

export default function JokesRoute(){
    let data = useLoaderData();
    return (
      <div >
        <h1>jokes</h1>
        <main className={tw`flex flex-row space-x-10`}>
          <ul>
            {data.jokes.map(j=>{
              return (
                <li key={j.id}>
                  <Link to={j.id}>{j.name}</Link>
                </li>
              )
            })}
          </ul>
          <Outlet />
        </main>
      </div>
    );
}