export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Pantry Tracker</title>
        <meta charset="utf-8" />
        
      </head>
      


          
        <body style={{ backgroundColor: '#000000' }}>
        {children}
      </body>
    </html>

  );
}
