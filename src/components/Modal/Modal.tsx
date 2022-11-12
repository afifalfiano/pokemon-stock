import { ReactNode } from "react"
import ReactDOM from 'react-dom';

export interface CardProps {
    children: ReactNode
}

export const RenderModal = (props: CardProps) => {
    return ReactDOM.createPortal(props.children, document.getElementById("modal-root")!)
}