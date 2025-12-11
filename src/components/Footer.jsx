import React from 'react'
import '../styles/footer.css'

export default function Footer(){
    return (
        <footer className="site-footer">
            <div className="container">© {new Date().getFullYear()} Muscle Mart. All rights reserved.</div>
        </footer>
    )
}
