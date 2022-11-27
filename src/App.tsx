import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Header />
      <Table />
    </FormProvider>
  );
}

export default App;
