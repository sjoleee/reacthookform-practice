import { useFormContext } from "react-hook-form";

const SubmitButton = () => {
  const { watch } = useFormContext();
  return (
    <button
      onClick={() => {
        console.log(watch());
      }}
    >
      제출하기
    </button>
  );
};

export default SubmitButton;
