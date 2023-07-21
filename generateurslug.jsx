import React, { useState } from "react";

const SlugGenerator = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  // Fonction pour générer un slug à partir du titre
  const generateSlug = () => {
    // Remplacer les caractères spéciaux et les espaces par des tirets
    const slugValue = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    setSlug(slugValue);
  };

  // Gérer le changement du titre
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Gérer la soumission du formulaire pour générer le slug
  const handleSubmit = (e) => {
    e.preventDefault();
    generateSlug();
  };

  return (
    <div>
      <h2>Générateur de slug</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Titre :
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <button type="submit">Générer le slug</button>
      </form>
      {slug && <div>Slug généré : {slug}</div>}
    </div>
  );
};

export default SlugGenerator;
