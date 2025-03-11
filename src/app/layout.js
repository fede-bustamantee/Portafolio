import React from 'react';

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Página personal con datos y proyectos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
