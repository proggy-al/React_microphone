import useSpeechRecognition from "./useSpeechRecognitionHook";

const Dictaphone = () => {
  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport
  } = useSpeechRecognition();

  return (
    <div>
        {hasRecognitionSupport ? (
            <>
                <div>
                    <button onClick={startListening}>Start</button>
                </div>

                <div>
                    <button onClick={stopListening}>Stop</button>
                </div>

                {isListening ? (
                    <div> Your browser is currently listerning</div>
                ):null}
                {text}
            </>


        ): (<h1>Browser doesn't support speech recognition</h1>)}

    </div>
  );
};
export default Dictaphone;