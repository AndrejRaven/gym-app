const theme = {
  colors: {
    primary: '#343a40', // Primary brand color
    secondary: '#00bfa5', // Secondary brand color
    background: '#f8f9fa', // Background color
    text: '#343a40', // Main text color
    textWhite: '#ffffff', //white text
    heading: '#007bff', // Heading text color
    accent: '#ffd700', // Accent color for highlights or actions
    error: '#dc3545', // Error or danger color
    success: '#28a745', // Success color
  },
  fonts: {
    primary: 'Poppins, sans-serif', // Main font family for body text
    heading: 'Playfair Display, serif', // Font for headings
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      lineHeight: '1.2',
    },
    h2: {
      fontSize: '2rem',
      lineHeight: '1.3',
    },
    h3: {
      fontSize: '1.8rem',
      lineHeight: '1.4',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      lineHeight: '1.4',
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#343a40',
    },
    small: {
      fontSize: '0.8rem',
      lineHeight: '1.4',
      color: '#868e96',
    },
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  },
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // Box shadow for cards and elements
  borderRadius: '8px', // Border radius for rounded elements
  maxWidth: '100%',
};

export default theme;