import React from 'react';
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Background } from './componetes/Background';

export const metadata = {
  title: 'Federico Bustamante',
  description: 'Página personal con datos y proyectos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content={metadata.description} />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
      </head>
      <body>
      <Background />
        <main>{children}</main>
      </body>
    </html>
  );
}
