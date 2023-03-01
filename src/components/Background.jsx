import React, { useRef, useState } from "react";

const Background = () => {
  const [renk, setRenk] = useState();

  const renkDegisimi = useRef(null);

  const degisim = () => {
    document.body.style.backgroundColor = renkDegisimi.current.value;
    setRenk(() => renkDegisimi.current.value);
  };

  return (
    <div>
         <h1 className="bg-success">3.Step Background Change</h1>
      <p>Inputa İngilizce Renk Gir</p>
      <input type="text" ref={renkDegisimi} onChange={degisim} />
      <p>{renk} </p>
    </div>
  );
};

export default Background;
