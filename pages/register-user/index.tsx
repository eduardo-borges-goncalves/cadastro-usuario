import { PrimaryBlueButton } from "../../components/button";
import { RegisterContainer } from "./style";

export default function RegisterUser () {
  return (
    <RegisterContainer>
      <h1>Cadastrar Usuário</h1>
      <form action="">
        <fieldset className="f-1">
          <input className="i-1" type="text" placeholder="Nome" />
          <input className="i-2" type="text" placeholder="Idade" />
        </fieldset>
        <fieldset className="f-2">
          <input type="text" placeholder="Linguagem" />
          <input type="text" placeholder="Área de atuação " />
          <input type="text" placeholder="Situação Profissional" />
        </fieldset>
        <fieldset className="f-3">
          <label htmlFor="experience">Possui experiência com desenvolvimento?</label>
          <div>
            
          Sim<input type="radio" name="experience" id="" />
          <input type="radio" name="experience" id="" />Não
          </div>
        </fieldset>
        <fieldset className="f-4">
          <input type="text" placeholder="LinkedIn" />
          <input type="text" placeholder="Github" />
        </fieldset>

        <PrimaryBlueButton type="submit">Cadastrar</PrimaryBlueButton>
      </form>
    </RegisterContainer>
  )
}