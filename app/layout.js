import "./src/styles/index.scss";

export const metadata = {
  title: 'Space Tourism',
  description: 'This is my solution of the Space Tourism challenge on Frontend Mentor'
  
};
  


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
