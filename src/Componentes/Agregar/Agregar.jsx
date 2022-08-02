import React from "react";
import "./Agregar.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { statsValidator } from "./validarStats";

export default function Agregar() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const agregarPokemon = async (data) => {
    try {
      const respuesta = await fetch("http://localhost:1235/addPkmn", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error(await respuesta.json());
      }
      const agregarPkmnFetch = await respuesta.json();
      console.log(agregarPkmnFetch);
      console.log(respuesta);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {localStorage.token ? (
        <div className="contact_form">
          <div className="formulario">
            <img
              onClick={() => navigate("../")}
              className="imgflecha"
              src={require("../Materiales/Flecha.png")}
              alt=""
            />
            <h1 className="h1Agregar">Agregar Pokémon</h1>
            <form onSubmit={handleSubmit(agregarPokemon)}>
              <p className="pAgregar">
                <label for="id">
                  Id
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="id"
                  {...register("id", {
                    required: true,
                    maxLength: 4,
                    pattern: /#{1}[0-9]{3}/,
                  })}
                />
                {errors.id?.type === "required" && <p>* Campo obligatorio</p>}
                {errors.id?.type === "maxLength" && <p> Longitud máxima: 4 </p>}
                {errors.id?.type === "pattern" && (
                  <p> Debe comenzar con # seguido de 3 numeros</p>
                )}
              </p>
              <p className="pAgregar">
                <label for="nombre">
                  Nombre
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  {...register("nombre", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.nombre?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
                {errors.nombre?.type === "maxLength" && (
                  <p>El nombre no puede contener mas de 20 caracteres</p>
                )}
                {errors.nombre?.type === "pattern" && (
                  <p>El nombre no puede contener números</p>
                )}
              </p>

              <p className="pAgregar">
                <label for="colorPrimario">
                  Color Primario
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="colorPrimario"
                  {...register("colorPrimario", {
                    required: true,
                    maxLength: 7,
                    pattern: /#{1}[0-9a-zA-Z]{6}/,
                  })}
                />
                {errors.colorPrimario?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
                {errors.colorPrimario?.type === "maxLength" && (
                  <p> Longitud máxima: 7 </p>
                )}
                {errors.colorPrimario?.type === "pattern" && (
                  <p>Debe empezar con # seguido de 6 valores entre a-f 0-9</p>
                )}
              </p>

              <p className="pAgregar">
                <label for="colorSecundario">Color Secundario</label>
                <input
                  type="text"
                  id="colorSecundario"
                  {...register("colorSecundario", {
                    maxLength: 7,
                    pattern: /#{1}[0-9a-zA-Z]{6}/,
                  })}
                />
                {errors.colorSecundario?.type === "maxLength" && (
                  <p> Longitud máxima: 7 </p>
                )}
                {errors.colorSecundario?.type === "pattern" && (
                  <p>Debe empezar con # seguido de 6 valores entre a-f 0-9</p>
                )}
              </p>
              <p className="pAgregar">
                <label for="peso">
                  Peso
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="peso"
                  {...register("peso", {
                    required: true,
                    pattern: /^[0-9]+([.][0-9]+)?$/,
                  })}
                />
                {errors.peso?.type === "required" && <p>* Campo obligatorio</p>}
                {errors.peso?.type === "pattern" && (
                  <p>Debe empezar con un número, y ser solo números!</p>
                )}
              </p>

              <p className="pAgregar">
                <label for="altura">
                  Altura
                  <span className="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  id="altura"
                  {...register("altura", {
                    required: true,
                    pattern: /^[0-9]+([.][0-9]+)?$/,
                  })}
                />
                {errors.altura?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
                {errors.altura?.type === "pattern" && (
                  <p>Debe empezar con un número, y ser solo números!</p>
                )}
              </p>

              <p className="pAgregar">
                <label for="tipo1">
                  Tipo primario
                  <span className="obligatorio">*</span>
                </label>
                <input
                  className="texto_mensaje"
                  id="tipo1"
                  {...register("tipo1", {
                    required: true,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.tipo1?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
                {errors.tipo1?.type === "pattern" && <p>Solo letras! </p>}
              </p>

              <p className="pAgregar">
                <label for="tipo2">Tipo secundario</label>
                <input
                  className="texto_mensaje"
                  id="tipo2"
                  {...register("tipo2", {
                    pattern: /^[A-Za-z]+$/,
                  })}
                ></input>
                {errors.tipo2?.type === "pattern" && <p>Solo letras! </p>}
              </p>

              <p className="pAgregar">
                <label for="movimiento1">
                  Movimiento 1<span className="obligatorio">*</span>
                </label>
                <input
                  className="texto_mensaje"
                  id="movimiento1"
                  {...register("movimiento1", {
                    required: true,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.movimiento1?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
                {errors.movimiento1?.type === "pattern" && <p>Solo letras! </p>}
              </p>

              <p className="pAgregar">
                <label for="movimiento2">Movimiento 2</label>
                <input
                  className="texto_mensaje"
                  id="movimiento2"
                  {...register("movimiento2", {
                    pattern: /^[A-Za-z]+$/,
                  })}
                ></input>
                {errors.movimiento2?.type === "pattern" && <p>Solo letras! </p>}
              </p>

              <p className="pAgregar">
                <label for="descripcion">Descripción</label>
                <textarea
                  className="texto_mensaje"
                  id="descripcion"
                  {...register("descripcion", {
                    required: true,
                  })}
                />
                {errors.descripcion?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
              </p>

              <div className="statsAgregar">
                <div className="statsAgregarColumna1">
                  <div className="inputStats">
                    <label for="HP">HP</label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      {...register("HP", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.HP?.type === "required" && (
                      <p>* Campo obligatorio</p>
                    )}
                    {errors.HP?.type === "maxLength" && (
                      <p> Longitud máxima: 3 </p>
                    )}
                    {errors.HP?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                  <div className="inputStats">
                    <label for="ATK">ATK</label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      {...register("ATK", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.ATK?.type === "required" && (
                      <p>* Campo obligatorio</p>
                    )}
                    {errors.ATK?.type === "maxLength" && (
                      <p> Longitud máxima: 3 </p>
                    )}
                    {errors.ATK?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                  <div className="inputStats">
                    <label for="DEF">DEF</label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      {...register("DEF", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.DEF?.type === "required" && (
                      <p>* Campo obligatorio</p>
                    )}
                    {errors.DEF?.type === "maxLength" && (
                      <p> Longitud máxima: 3 </p>
                    )}
                    {errors.DEF?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                </div>
                <div className="statsAgregarColumna2">
                  <div className="inputStats">
                    <label for="SATK">SATK</label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      {...register("SATK", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.SATK?.type === "required" && (
                      <p>* Campo obligatorio</p>
                    )}
                    {errors.SATK?.type === "maxLength" && (
                      <p> Longitud máxima: 3 </p>
                    )}
                    {errors.SATK?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                  <div className="inputStats">
                    <label for="SDEF">SDEF</label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      {...register("SDEF", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.SDEF?.type === "required" && (
                      <p>* Campo obligatorio</p>
                    )}
                    {errors.SDEF?.type === "maxLength" && (
                      <p> Longitud máxima: 3 </p>
                    )}
                    {errors.SDEF?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                  <div className="inputStats">
                    <label for="SPD">SPD</label>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      {...register("SPD", {
                        required: true,
                        maxLength: 3,
                        validate: statsValidator,
                        pattern: /^[0-9]+$/,
                      })}
                    />
                    {errors.SPD?.type === "required" && (
                      <p>* Campo obligatorio</p>
                    )}
                    {errors.SPD?.type === "maxLength" && (
                      <p> Longitud máxima: 3 </p>
                    )}
                    {errors.SDEF?.type === "pattern" && <p>Solo numeros!</p>}
                  </div>
                </div>
              </div>
              <p className="pAgregar">
                <label for="imagen">
                  Imagen<span className="obligatorio">*</span>
                </label>
                <input
                  className="texto_mensaje"
                  id="imagen"
                  {...register("imagen", {
                    required: true,
                  })}
                />
                {errors.imagen?.type === "required" && (
                  <p>* Campo obligatorio</p>
                )}
              </p>

              <button className="buttonEnviar" type="submit" id="enviar">
                <p className="pAgregar">Enviar</p>
              </button>

              <p className="aviso">
                <span className="obligatorio"> * </span>los campos son
                obligatorios.
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div>No estás logeado wachin</div>
      )}
    </>
  );
}
