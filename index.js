import { createElement, createContext, useContext } from "react";

const globalContext = createContext();

export function useGlobals() {
	return useContext(globalContext);
}

export function Globals({value, children}) {
	return createElement(globalContext.Provider, { value }, children);
}