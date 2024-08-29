import './style.css'
import Button from '@mui/material/Button';
import logo from './logo.png'
function Header() {
    return (
        <div className="header">
            <div className='imgtitle'>
            <img src={logo} alt="...loading"/>
            <h4>Abstract | Help Center</h4>
            </div>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'transparent',
                    border: '1px solid grey',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'darkgrey', // Optional: Slightly darker shade on hover
                        borderColor: 'darkgrey', // Optional: Match the border color on hover
                    },
                }}
            >
                Submit a request
            </Button>
        </div>
    );
}

export default Header;
