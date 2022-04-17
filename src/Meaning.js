import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span>
              <strong>Defenition:</strong> {definition.definition}
              <br />
              <Examples examples={definition.example} />
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
