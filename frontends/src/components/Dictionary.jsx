import { useMemo, useState, useEffect } from "react";
import "./Dictionary.css";

const synth = window.speechSynthesis;

export default function Dictionary() {
  const voices = useMemo(() => synth.getVoices());
  const [voiceSelected, setVoiceSelected] = useState(
    "Microsoft Zira - English (United States)"
  );
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [meaningOne, setMeaningOne] = useState([]);
  const [meaningTwo, setMeaningTwo] = useState([]);
  const [phonetics, setPhonetics] = useState([]);
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const dictionaryApi = (text) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setMeanings(data[0].meanings[0].definitions[0]);
      setMeaningOne(data[0].meanings[0].definitions[2].definition);
      setMeaningTwo(data[0].meanings[0].definitions[3].definition);
      setWord(data[0].word);
      setPhonetics(data[0].phonetics[0].text);
    }
    fetchData();
  };


  useEffect(() => {
    if (!text.trim()) return;
    const debounce = setTimeout(() => {
      dictionaryApi(text);
    }, 1000);

    return () => clearTimeout(debounce);
  }, [text]);

  const startSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((voice) => voice.name === voiceSelected);
    utterance.voice = voice;
    synth.speak(utterance);
  };

  const handleSpeech = () => {
    if (!synth.speaking) {
      startSpeech(text);
      setIsSpeaking("Speak");
    } else {
      synth.cancel();
    }

    setInterval(() => {
      if (!synth.speak) {
        setIsSpeaking("");
      }
    }, 100);
  };

  return (
    <div className="main">
      <div className="mainContainer">
        <h3>Dictionary</h3>
        <form>
          <div className="row">
            <textarea
              cols={30}
              rows={4}
              placeholder="Enter text"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div className="voice-icons">
              <div className="select-voices">
                <select
                  name={voiceSelected}
                  onChange={(e) => setVoiceSelected(e.target.value)}
                >
                  {voices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name}
                    </option>
                  ))}
                </select>
              </div>

              <span
                className={`volume-high ${isSpeaking}`}
                onClick={handleSpeech}
              >
                🔊
              </span>
            </div>
          </div>
        </form>
        <h3 style={{ fontSize: "14px" }}>
          word: <span>{word}</span>
        </h3>
        <span>Meaning:</span>
        <h2>{meanings.definition}</h2>
        <br />
        <h2>{meaningOne}</h2>
        <br />
        <h2>{meaningTwo}</h2>
        <span>Phonetics:</span>
        <p>{phonetics}</p>
      </div>
    </div>
  );
}
