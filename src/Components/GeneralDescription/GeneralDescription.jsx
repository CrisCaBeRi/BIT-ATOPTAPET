//import { useState } from "react";
import { dataPet } from "../../Data/adopta";
import "../GeneralDescription/GeneralDescriptionStyles.css";
const GeneralDescription = () => {

  const sendwhatsapp = (pet) => {
    let number = 573124116756;
    let url = `https://wa.me/${number}?text= Hola, estoy interesado en adoptar a ${pet.name}`;
    window.open(url);
  };
  return (
    <>
      <section className="GeneralCard">
        {dataPet.map((pet) => (
          <article className="GeneralpetCard" key={pet.id}>
            <span className="titleContent">
              <h1 className="title">{pet.name}</h1>
            </span>
            <figure className="imgContainer">
              <img src={pet.imgUrl} alt="Pet Image" />
            </figure>
            
            <footer className="footerCard">
              <ul className="footerCard-li">
                <li>Raza: {pet.petBreed}</li>
                <li>Edad: {pet.petAge}</li>
                <li>Genero:{pet.gender}</li>
              </ul>
              <button className="button" onClick={()=>{sendwhatsapp(pet)}}>Adoptar</button>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
};
export default GeneralDescription;
