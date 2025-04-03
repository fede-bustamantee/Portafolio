"use client";
import { useEffect, useState } from "react";
import CurriculumGenerator from "../componetes/pdf/CurriculumGenerator";

export default function CurriculumPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="pdf-container">
            {isClient ? (
                <CurriculumGenerator />
            ) : (
                <p
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh"
                    }}>Cargando...
                </p>
            )}
        </div>
    );
}