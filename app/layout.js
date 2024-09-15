import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog website",
  description: "Blog website - next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'#52fbde'}} className={`${geistSans.variable} ${geistMono.variable} antialiased` }>

        <header className="">
          <div style={{width:'100%',backgroundColor:'#34303A',color:'white',padding:'10px 20px',borderRadius:'10px',margin:''}}>
            <Link href="/inde" style={{paddingleft:'80px',fontSize:'50px',display:'flex',justifyContent:'left'}}>Logo</Link>
            <div style={{display:'flex',justifyContent:'right',paddingBottom:'40px'}}>
            <Link href="/Ho">
              <button style={{paddingRight:'100px'}}>Home</button>
            </Link>
            <Link href="/foot">
              <button style={{paddingRight:'100px'}}>Sporting</button>
            </Link>
            <Link href="/new">
              <button style={{paddingRight:'100px'}}>News</button>
            </Link>
            <Link href="/ed">
              <button style={{paddingRight:'100px'}}>Education</button>
            </Link>
            
            </div>
          </div>
          
        </header>

        
        {children}


          
      </body>
    </html>
  );
}
