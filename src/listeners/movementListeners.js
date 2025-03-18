import { useEffect } from "react";

export const MovementListeners = (setKeyPressed) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
        
            if (["ArrowUp", "w"].includes(key)) {
                setKeyPressed("up");
            } else if (["ArrowDown", "s"].includes(key)) {
                setKeyPressed("down");
            } else if (["ArrowLeft", "a"].includes(key)) {
                setKeyPressed("left");
            } else if (["ArrowRight", "d"].includes(key)) {
                setKeyPressed("right");
            } else if (["Enter", " "].includes(key)) {
                setKeyPressed("enter");
            }
        };
        
        const handleKeyUp = () => {
            setKeyPressed(null);
        };
    
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        }
    }, []);
}