import React from 'react'

export default function Footer(){
    return (
        <footer style={
            {
                background: '#282828',
                padding: '2rem 0',
                marginTop: '3rem',
                borderTop: '1px solid var(--border)',
                textAlign: 'center',
                boxShadow: '0 -2px 10px var(--card-shadow)',
                color: 'var(--bg)'
            }
        }>
            <div className="container">© {new Date().getFullYear()} Muscle Mart. All rights reserved.</div>
        </footer>
    )
}
