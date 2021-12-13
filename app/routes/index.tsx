import { Link } from "remix";

export default function IndexRoute(){
  return (
    <div>
      <Link to="jokes">read jokes</Link>
    </div>
  );
}