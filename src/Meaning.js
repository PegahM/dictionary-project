import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="eachDefintion">
            <div className="definition">{definition.definition}</div>

            <Examples examples={definition.example} />

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
