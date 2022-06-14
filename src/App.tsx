import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [endereco, setEndereco] = useState('');
  const handleInputName = (nameEvent: React.ChangeEvent<HTMLInputElement>) => {
    setName(nameEvent.target.value);
  }
  const handleInputIdade = (idadeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(idadeEvent.target.value);
  }
  const handleInputEndereco = (enderecoEvent: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco(enderecoEvent.target.value);
  }
  return (
    <div>
      Nome:<br />
      <input type="text" value={name} onChange={handleInputName} />
      <br />
      Idade:<br />
      <input type="number" value={idade} onChange={handleInputIdade} />
      <hr />
      Idade:<br />
      <input type="text" value={endereco} onChange={handleInputEndereco} />
      <hr />
      Seu nome é: {name}
      <br />
      Você tem: {idade} anos
      <br />
      Seu endereço é: {endereco}
    </div>
  )
}

export default App;
