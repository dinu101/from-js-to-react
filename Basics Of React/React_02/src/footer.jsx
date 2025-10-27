import React from 'react';

// Component function name starts with a Capital Letter (PascalCase)
export default function Footer() {
  return (
    // Added some styling for better visibility
    <footer style={{
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#1f2937', // Dark gray background
      color: '#d1d5db', // Light text
      textAlign: 'center',
      borderRadius: '8px'
    }}>
      <p>Custom Footer Component is working! © 2025</p>
    </footer>
  );
}
