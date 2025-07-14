import { Jokes } from "./jokes";
import jokesData from "./jokesData";
export function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });
  return <main>{jokeElements}</main>;
}
