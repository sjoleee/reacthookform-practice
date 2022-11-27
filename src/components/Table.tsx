import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const data = ["S00001", "S00002", "S00003", "S00004", "S00005"];

const Table = () => {
  const { register, setValue, watch } = useFormContext();

  useEffect(
    () => {
      if (data.every((item) => watch(`id.${item}`) === true)) {
        setValue("all", true);
      } else {
        setValue("all", false);
      }
    },
    data.map((item) => watch(`id.${item}`))
  );

  return (
    <>
      <div>
        <input
          type="checkbox"
          {...register("all")}
          onChange={(e) => {
            if (e.target.checked) {
              data.forEach((item) => {
                setValue(`id.${item}`, true);
              });
            } else {
              data.forEach((item) => {
                setValue(`id.${item}`, false);
              });
            }
          }}
        />
      </div>
      {data.map((item) => (
        <input {...register(`id.${item}`)} key={`${item}`} type="checkbox" />
      ))}
    </>
  );
};

export default Table;
