import { createContext, ReactNode, useContext, useState } from "react";

interface FormContextProps {
  stage: number;
  handleNextStage: (maxStages: number) => void;
  handlePreviousStage: () => void;
  handleUpdateStage: (updatedStage: number) => void;
}

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContext = createContext({} as FormContextProps);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [stage, setStage] = useState(1);

  function handleNextStage(maxStages: number) {
    if (stage <= maxStages) {
      setStage(stage + 1);
      window.scrollTo(0, 0);
    }
  }

  function handlePreviousStage() {
    setStage(stage - 1);
  }

  function handleUpdateStage(updatedStage: number) {
    setStage(updatedStage);
  }

  return (
    <FormContext.Provider
      value={{ handleNextStage, handlePreviousStage, handleUpdateStage, stage }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);

  return context;
}
