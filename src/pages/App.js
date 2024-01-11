import logo from "../assets/git.png";

import { Container } from "./styles";

import Input from "../components/input/index";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import Button from "../components/Button";
import Api from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  const handleSearchRepo = async () => {
    const { data } = await Api.get(`repos/${currentRepo}`);
    const isExist = repos.find((repo) => repo.id == data.id);

    if (data.id) {
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("repositório não encontrado");
  };

  const handleRemoveRepo = (id) => {
    const updateRepos = repos.filter((repo) => repo.id !== id);
    setRepos(updateRepos);
  };

  return (
    <Container>
      <img src={logo} width={75} height={75} alt="logo git" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          handleRemoveRepo={handleRemoveRepo}
          repo={repo}
        />
      ))}
    </Container>
  );
}

export default App;
