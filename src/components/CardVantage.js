import { useEffect, useState } from "react";
import load from "../load.svg";

export const CardVantage = () => {
  const [urlWoof, setUrlWoof] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(false);
  }, [urlWoof]);

  const handleGetStatistic = () => {
    setIsLoad(true);
    fetch("https://random.dog/woof.json?ref=apilist.fun")
      .then((response) => response.json())
      .then((data) => setUrlWoof(data.url))
      .catch((err) => console.error(err));
  };

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Your random woof</h5>
        <p class="card-text">
          {isLoad ? (
            <img className="woofLoad" src={load} alt="Plase regenerate woof"></img>
          ) : (
            <img className="woofPhoto" src={urlWoof} />
          )}
        </p>
        <button onClick={handleGetStatistic} class="btn btn-primary">
          Receive
        </button>
      </div>
    </div>
  );
};
