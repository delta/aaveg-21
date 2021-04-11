import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    title: {
        margin: '10px'
    },
    main: {
        position: 'fixed',
        backgroundColor: 'black',
        right: '0',
        bottom: '0',
        minWidth: '100%',
        minHeight: '100%',
    },
    container: {
        textAlign: 'center',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '100em',
    },
    bgimg:{
        position: "fixed",
        width: "100%",
        height: "100%",
        bottom: 0,
        left: 0,
    },
    cover: {
        padding: '40px 30px',
        fontSize: '18px',
    }
}));