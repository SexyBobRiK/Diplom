import React from "react";

export default function Message({ msg, time, lineLength }) {
  const lines = [];
  for (let i = 0; i < msg.length; i += lineLength) {
    lines.push(msg.slice(i, i + lineLength));
  }
  return (
    <>
      <div className="msg-to-you">
        {lines.map((line, index) => (
          <>
            <p key={index}>{line}</p>
          </>
        ))}
        <p className="msg-time">{time}</p>
      </div>
    </>
  );
}
