import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import ToggleButton from "./../../components/ToggleButton.js";
import { circleareasector } from "./../../utils/geoformula.js";

export default function ArcLengthCirle() {
  const [missing, setMissing] = useState("A");
  const [A, setA] = useState("");
  const [r, setr] = useState("");
  const [angle, setangle] = useState("");
  const [degreeSelected, setSelected] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = circleareasector(missing, A, r, angle, degreeSelected);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setA("");
    setr("");
    setangle("");
  }

  function handleInputA(e) {
    setA(e.target.value);
  }
  function handleInputr(e) {
    setr(e.target.value);
  }
  function handleInputangle(e) {
    setangle(e.target.value);
  }

  const rangle = (
    <>
      <Input name="r" function={handleInputr} value={r} />
      <Input name="angle" function={handleInputangle} value={angle} />
    </>
  );
  const Ar = (
    <>
      <Input name="A" function={handleInputA} value={A} />
      <Input name="r" function={handleInputr} value={r} />
    </>
  );
  const Aangle = (
    <>
      <Input name="A" function={handleInputA} value={A} />
      <Input name="angle" function={handleInputangle} value={angle} />
    </>
  );

  return (
    <>
      <Title title="Area of a Sector of Circle" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Area of a Sector of Circle</h1>
        <div className="flex">
          <div className="w-3/4">
            <label
              htmlFor="names"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select from the dropdown menu
            </label>
            <select
              id="names"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleMissing}
              value={missing}
            >
              <option value="A">Solve for A</option>
              <option value="r">Solve for r</option>
              <option value="angle">Solve for angle</option>
            </select>
          </div>
          <div className="w-1/4 px-4">
            <label
              htmlFor="names"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Radian/Degree
            </label>
            <ToggleButton
              left="rad"
              right="°"
              degreeSelected={degreeSelected}
              setSelected={setSelected}
            />
          </div>
        </div>

        {missing == "A"
          ? rangle
          : missing == "r"
          ? Aangle
          : missing == "angle"
          ? Ar
          : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + circleareasector(missing, A, r, angle, degreeSelected)}
        </div>
      </form>
    </>
  );
}
