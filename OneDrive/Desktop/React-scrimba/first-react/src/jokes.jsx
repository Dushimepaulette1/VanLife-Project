export function Jokes(props) {
  return (
    <>
      {props.setup && <h1>{props.setup}</h1>}
      <h2>{props.punchline}</h2>
    </>
  );
}
