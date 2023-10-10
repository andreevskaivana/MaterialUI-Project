import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',
    },
    button: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    },
    cardContent: {
        flexGrow: '1'
    },
}));

export default useStyles;
