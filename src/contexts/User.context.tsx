/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, Dispatch, FC, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IFormState {
  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface IFormAction {
  type: 'add' | 'update' | 'delete';
  payload: Partial<IFormState> | string;
}

interface IFormContext {
  state: IFormState[];
  dispatch: Dispatch<IFormAction>;
}

const initialState: IFormState[] = [];

const FormContext = createContext<IFormContext | undefined>(undefined);

const formReducer: React.Reducer<IFormState[], IFormAction> = (state, action) => {
  switch (action.type) {
    case 'add': {
      const newFormState: IFormState = { ...(action.payload as IFormState), id: uuidv4() };
      return [...state, newFormState];
    }
    case 'delete': {
      const idToDelete = action.payload as string;
      const updatedState = state.filter((formState) => formState.id !== idToDelete);
      return updatedState;
    }
    case 'update': {
      const updatedFormState: IFormState = action.payload as IFormState;
      const updatedState = state.map((formState) =>
        formState.id === updatedFormState.id ? updatedFormState : formState
      );
      return updatedState;
    }
    default:
      return state;
  }
};

interface IProviderProp {
  children: ReactNode;
}

export const FormProvider: FC<IProviderProp> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): IFormContext => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  return context;
};

export default FormContext;
