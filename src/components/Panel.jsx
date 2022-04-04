import React from "react";

const Panel = ({ getData }) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-purple-300 w-3/4 rounded-lg shadow-lg">
        <form onSubmit={getData}>
          <div className="flex justify-evenly m-5">
            <select name="input" className="rounded-lg p-1">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="it">Italian</option>
              <option value="he">Hebrew</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ht">Haitian</option>
              <option value="hi">Hindu</option>
              <option value="pt">Portuguese</option>
            </select>
            <select name="output" className="rounded-lg p-1">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="it">Italian</option>
              <option value="he">Hebrew</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ht">Haitian</option>
              <option value="hi">Hindu</option>
              <option value="pt">Portuguese</option>
            </select>
          </div>
          <div className="m-5 text-center">
            <textarea
              name="text"
              className="resize-none w-full h-20 rounded-md"
            ></textarea>
          </div>
          <div className="text-center m-2">
            <input
              type="submit"
              value="Send Data"
              className="m-1 p-2 border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 transition-all"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Panel;
