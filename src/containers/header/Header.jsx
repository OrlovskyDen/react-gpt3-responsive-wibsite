import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="wl__header section__padding" id="home">
      <div className="wl__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="wl__header-content__input">
          <input type="email" placeholder="Your email" />
          <button>Get started</button>
        </div>
        <div className="wl__header-content__people">
          <img src={people} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="wl__header-image">
        <img src={ai} alt="Ai" />
      </div>
    </div>
  );
}

export default Header;
