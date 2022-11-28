import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const data = ["S00001", "S00002", "S00003", "S00004", "S00005"];

const Table = () => {
  const { register, setValue, watch } = useFormContext();

  const handleSelectAll = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      data.forEach((item) => {
        setValue(`id.${item}`, true);
      });
    } else {
      data.forEach((item) => {
        setValue(`id.${item}`, false);
      });
    }
  };

  useEffect(
    () => {
      if (data.every((item) => watch(`id.${item}`) === true)) {
        setValue("selectAll", true);
      } else {
        setValue("selectAll", false);
      }
    },
    data.map((item) => watch(`id.${item}`))
  );

  return (
    <>
      <div>
        <input
          type="checkbox"
          {...register("selectAll")}
          onChange={handleSelectAll}
        />
      </div>
      {data.map((item) => (
        <input {...register(`id.${item}`)} key={`${item}`} type="checkbox" />
      ))}
    </>
  );
};

export default Table;
