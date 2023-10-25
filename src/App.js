import React, { useState, useEffect } from "react";
import { Button, Input } from 'antd';
import Titulo from "./Componentes/HeaderComponent/Titulo";
import Frase from './Componentes/FraseComponent/Frase'
import './App.css';
const { TextArea } = Input;

const App = () => {
  const [inputText, setInputText] = useState("");
  const [frases, setFrases] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedFrases = JSON.parse(localStorage.getItem("frases")) || [];
    setFrases(savedFrases);
  }, []);

  useEffect(() => {
    localStorage.setItem("frases", JSON.stringify(frases));
  }, [frases]);

  const handleAddFrase = () => {
    if (inputText.trim() !== "") {
      setFrases([...frases, inputText]);
      setInputText("");
    }
  };

  const handleDeleteFrase = (index) => {
    const newFrases = frases.filter((_, i) => i !== index);
    setFrases(newFrases);
  };

  const handleEditFrase = (index, editedFrase) => {
    const newFrases = [...frases];
    newFrases[index] = editedFrase;
    setFrases(newFrases);
  };

  return (
    <div className="App">
      <Titulo></Titulo>


      <div className="containerAdicionarFrase">
        <TextArea
          className="TextArea"
          rows={4}
          type="text"
          placeholder="Digite sua nota aqui..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          className="ButtonAdd"
          type="primary"
          onClick={handleAddFrase}
        >
          Adicionar Frase
        </Button>
      </div>

      <div className="containerPesquisa">

        <Input
          className="imputBuscar"
          type="text"
          placeholder="Pesquisar frases"
          value={searchText}
          onChange={(e) => setSearchText((e.target.value).toLowerCase())}
        />


      </div>

      <div className="divFrases">

        {
          frases
            .filter((frase) => frase.toLowerCase().includes(searchText))
            .map((frase, index) => (
              <Frase
                key={index}
                frase={frase}
                handleDeleteFrase={() => handleDeleteFrase(frases.indexOf(frase))}
                handleEditFrase={(editedFrase) => handleEditFrase(frases.indexOf(frase), editedFrase)}
              />
            ))
        }
      </div>
    </div>
  );
};

export default App;
