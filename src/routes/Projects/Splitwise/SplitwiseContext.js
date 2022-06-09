import React from "react";
let SplitwiseContext = React.createContext({
  groups: undefined,
  setGroups: undefined
});

export const SplitwiseContextProvider = function ({ children }) {
  let [groups, setGroups] = React.useState(undefined);
  let value = {
    groups,
    setGroups
  };
  return (
    <SplitwiseContext.Provider value={value}>
      {children}
    </SplitwiseContext.Provider>
  );
};

export const useSplitwise = function () {
  return React.useContext(SplitwiseContext);
};

export default {
  SplitwiseContextProvider,
  useSplitwise
};
