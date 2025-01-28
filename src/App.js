import "./App.css";
import Video from "./components/video";

function App() {
  let videos = [
    {
      title: "React JS tutorial",
      views: "100k",
      time: "1month",
      channel: "Random123",
      verified=true
    },
    {
      title: "node JS tutorial",
      views: "200k",
      time: "1month",
      channel: "Random123",
      verified=true
    },
    {
      title: "Javascript tutorial",
      views: "5m",
      time: "1month",
      channel: "Random123",
      verified=true
    },
    {
      title: "Java tutorial",
      views: "200k",
      time: "1month",
      channel: "Random123",
      verified=true
    },
    {
      title: "java full course",
      views: "1m",
      time: "1month",
      channel: "Random123",
      verified=true
    },
  ];

  return (
    <div className="App">
      <Video></Video>
    </div>
  );
}

export default App;
