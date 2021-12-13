import { apply, tw } from "twind";

export default function NewJokeRoute(){
    return (
      <form action="post">
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
          <textarea className={tw`${inputField}`} name="content" id="content" />
        </div>
        <button type="submit" className={tw`p-2 border border-gray-300`}>Add</button>
      </form>
    );
}


const inputContainer = apply`flex flex-col p-3`;
const inputLabel = apply`text-xs text-gray-400 font-semibold`
const inputField = apply`p-1 border border-gray-500 w-64`