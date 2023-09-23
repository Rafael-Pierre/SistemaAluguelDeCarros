import Link from "next/link";
import React from "react";
import { CarTwoTone } from "@ant-design/icons";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Aluguel de Carros</h1>
        <p>Descubra a experiência de dirigir carros incríveis!</p>
        <p>
          <CarTwoTone className="icons2" />
        </p>
        <button className="btn btn-primary">
          <Link href={"/login"}>Faça o Login</Link>
        </button>
        <button className="btn btn-secondary">
          <Link href={"/cadastro"}>Cadastre-se</Link>
        </button>
      </div>
    </div>
  );
}
