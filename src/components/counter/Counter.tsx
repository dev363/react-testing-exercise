import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <section id="input-section">
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button onClick={() => setCount(amount)}>Set</button>
      </section>
      <section id="upload-section">
        <label htmlFor="file-uploader">Upload file:</label>
        <input id="file-uploader" type="file" />
        <button onClick={() => {}}>Upload</button>
      </section>
    </div>
  );
};
