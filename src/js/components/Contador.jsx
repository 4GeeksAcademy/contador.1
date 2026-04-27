import { useEffect, useState } from "react";

function Contador() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => (prev === 999 ? 0 : prev + 1));
            }, 1000);
            return () => clearInterval(interval);
        }, []);
        const centenas = Math.floor(count / 100);
        const decenas = Math.floor((count % 100) / 10);
        const unidades = count % 10;


    return(
        <div className="text-center mt-5">
            <h2 style={{fontSize: "4rem", letterSpacing: "10px" }}>
                {centenas}{decenas}{unidades}
            </h2>
        </div>
    );

};
export default Contador;