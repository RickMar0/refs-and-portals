import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Amateur" targetTime={5}/>
        <TimerChallenge title="Competitive" targetTime={10}/>
        <TimerChallenge title="Pro" targetTime={15}/>
        <TimerChallenge title="Legend" targetTime={60}/>
      </div>
    </>
  );
}

export default App;
