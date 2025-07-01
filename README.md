# Brevo Login Page

A responsive login page implementation with client-side form validation, styled to match Brevo's design aesthetic.

## Project Structure

```
loginPage/
├── index.html          # Main HTML structure
├── script.js           # JavaScript functionality and validation
├── style.css           # Styling and layout
├── .vscode/
│   └── settings.json   # VS Code configuration
└── asset/
    ├── appleLogo.png   # Apple sign-in logo
    ├── brevoLogo.png   # Brevo company logo
    ├── cross.png       # Error icon
    └── googleLogo.png  # Google sign-in logo
```

## Features

### Form Validation
- **Email Validation**: Checks for proper email format using regex pattern
- **Password Validation**: 
  - Ensures password is not empty
  - Validates minimum 8 characters with at least one uppercase letter and one number
- **Real-time Feedback**: Visual indicators for invalid inputs with red borders and error messages

### Authentication Options
- Traditional email/password login
- Google Sign-in integration (placeholder)
- Apple Sign-in integration (placeholder)

### User Experience
- Responsive design with centered layout
- Error messages with visual feedback
- Form reset functionality
- Clean, modern UI matching Brevo's brand

## File Descriptions

### [`index.html`](index.html)
Main HTML structure containing:
- Login form with email and password fields
- Validation error containers

### [`script.js`](script.js)
JavaScript functionality including:
- Form submission handling with [`getFormData`](script.js) function
- Email validation using [`validateEmailInput`](script.js)
- Password validation with [`validatePasswordInput`](script.js) and [`validatePasswordLength`](script.js)
- UI feedback functions for validation errors


### [`style.css`](style.css)
Styling for:
- Responsive layout with flexbox
- Form styling and input fields
- Error state styling

## Getting Started

1. **Clone or download** the project files
2. **Open** [`index.html`](index.html) in a web browser
3. **For development**: Use Live Server extension in VS Code (configured to run on port 5501)

## Validation Rules

### Email
- Must follow standard email format: `user@domain.com`
- Uses regex pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Password
- Cannot be empty
- Minimum 8 characters
- Must contain at least one uppercase letter
- Must contain at least one number
- Uses regex pattern: `/^(?=.*[A-Z])(?=.*\d).{8,}$/`

## Browser Compatibility

- Modern browsers supporting ES6+
- Responsive design works on desktop and mobile devices

### Live Server Configuration
The project includes VS Code Live Server settings in [`.vscode/settings.json`](.vscode/settings.json):
```json
{
    "liveServer.settings.port": 5501
}
```

### Form Submission
Currently configured to POST to `/login` endpoint. Update the `action` attribute in the form element to match your backend URL.

## Assets

All images are stored in the `asset/` directory:
- **brevoLogo.png**: Main company logo
- **googleLogo.png** & **appleLogo.png**: Social sign-in provider logos  
- **cross.png**: Error indicator icon
