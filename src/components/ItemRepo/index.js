import React from "react";

import { ItemContainer } from "./styles";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };
  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.fullname}</p>
      <a href={repo.html_url} target="blanc">
        ver repositório
      </a>
      <a href="#" rel="noreferrer">
        remover
      </a>
      <hr />
    </ItemContainer>
  );
};

export default ItemRepo;
