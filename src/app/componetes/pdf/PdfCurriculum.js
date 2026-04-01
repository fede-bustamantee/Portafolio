import React from "react";
import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";
import curriculumData from "../../data/curriculum";

const styles = StyleSheet.create({
    page: { flexDirection: "column", padding: 60 },
    header: { fontSize: 15, marginBottom: 10, textAlign: "center", textDecoration: "underline" },
    section: { marginBottom: 10 },
    text: { fontSize: 12, marginBottom: 2 },
    link: { color: "blue", textDecoration: "underline", fontSize: 12 },
    listItem: { fontSize: 12, marginLeft: 10, marginBottom: 2 },
});
const PdfCurriculum = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.header}>Currículum Vitae</Text>
            <View style={styles.section}>
                <Text style={styles.text}>Nombre: {curriculumData.nombre}</Text>
                <Text style={styles.text}>Fecha de Nacimiento: {curriculumData.fechaNacimiento}</Text>
                <Text style={styles.text}>Edad: {curriculumData.edad} años</Text>
                <Text style={styles.text}>Email: {curriculumData.email}</Text>
                <Text style={styles.text}>Teléfono: {curriculumData.telefono}</Text>
                <Link src={curriculumData.linkedin} style={styles.link}>
                    Mi LinkedIn
                </Link>
                <Link src={curriculumData.github} style={styles.link}>
                    Mi GitHub
                </Link>
                <Link src={curriculumData.portafolio} style={styles.link}>
                    Mi Portafolio
                </Link>
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Perfil Profesional</Text>
                <Text style={styles.text}>{curriculumData.perfil}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Educación</Text>
                {curriculumData.educacion.map((edu, index) => (
                    <Text key={index} style={styles.text}>
                        {edu.titulo} - {edu.carrera}
                    </Text>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Habilidades Técnicas</Text>
                {curriculumData.habilidades.map((habilidad, index) => (
                    <Text key={index} style={styles.listItem}>• {habilidad}</Text>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Proyectos Destacados</Text>
                {curriculumData.proyectos.map((proyecto, index) => (
                    <View key={index}>
                        <Text style={styles.text}> {proyecto.nombre}</Text>
                        <Text style={styles.listItem}>{proyecto.descripcion}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Idiomas</Text>
                {curriculumData.idiomas.map((idioma, index) => (
                    <Text key={index} style={styles.text}> {idioma}</Text>
                ))}
            </View>
        </Page>
    </Document>
);

export default PdfCurriculum;