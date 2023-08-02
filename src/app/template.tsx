import { ReactNode } from "react";
import TemplateBase from "../components/template-base";

export default function Template({ children }: { children: ReactNode }) {
    return <TemplateBase>{children}</TemplateBase>;
}
