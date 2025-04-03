"use client";
import { useEffect, useState } from "react";
import PdfCurriculum from "../componetes/pdf/PdfCurriculum";
import { PDFViewer } from "@react-pdf/renderer";

export default function CurriculumPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="pdf-container">
            {isClient ? (
                <PDFViewer style={{ width: "100%", height: "100vh" }}>
                    <PdfCurriculum />
                </PDFViewer>
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