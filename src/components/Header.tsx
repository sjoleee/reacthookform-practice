import { useFormContext } from "react-hook-form";
import SubmitButton from "./SubmitButton";

const Header = () => {
  const { register } = useFormContext();
  return (
    <>
      <input {...register("input1")} placeholder="input1" />
      <input
        {...register("version")}
        onKeyDown={(e) => {
          if (e.code === "Enter") e.preventDefault();
        }}
        placeholder="version"
      />
      <button
        type="button"
        onClick={() => {
          console.log("다른행동");
        }}
      >
        다른버튼
      </button>
      <SubmitButton />
    </>
  );
};

export default Header;
