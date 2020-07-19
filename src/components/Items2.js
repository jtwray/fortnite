import Items from "./Items";

function Items2 () {
    return (
      <div>
        <h1>Topics</h1>
        <ul>
          {topics.map(({ name, id }) => (
            <li key={id}>
              <Link to={`/topics/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
}
  export default Items2;