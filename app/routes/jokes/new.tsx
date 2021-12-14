import type { ActionFunction } from "remix";
import { redirect } from "remix";
import { apply, tw } from "twind";
import { db } from "~/utils/db.serve";


export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");
  // we do this type check to be extra sure and to make TypeScript happy
  // we'll explore validation next!
  if (typeof name !== "string" || typeof content !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }


  const fields = { name, content };

  const joke = await db.joke.create({ data: fields });
  return redirect(`/jokes/${joke.id}`);
};

export default function NewJokeRoute() {
  return (
    <form method="post">
      <div className={tw`${inputContainer}`}>
        <label className={tw`${inputLabel}`} htmlFor="name">
          Name:
        </label>
        <input
          className={tw`${inputField}`}
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className={tw`${inputContainer}`}>
        <label className={tw`${inputLabel}`} htmlFor="content">
          Content:
        </label>
        <textarea
          className={tw`${inputField}`}
          name="content"
          id="content"
          typeof="text"
        />
      </div>
      <button type="submit" className={tw`p-2 border border-gray-300`}>
        Add
      </button>
    </form>
  );
}

const inputContainer = apply`flex flex-col p-3`;
const inputLabel = apply`text-xs text-gray-400 font-semibold`;
const inputField = apply`p-1 border  text-gray-900 border-gray-500 w-64`;
