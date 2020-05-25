import React from "react";
import NextHead from "next/head";

type Head = ({ children }: { children: React.ReactNode }) => JSX.Element;

const Head: Head = ({ children }) => <NextHead>{children}</NextHead>;

export default Head;
