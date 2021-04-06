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
    bgVideo: {
        position: 'fixed',
        right: '0',
        bottom: '0',
        minWidth: '100%',
        minHeight: '100%',
        zIndex: '-1',
        opacity: '50%',
    },
    cover: {
        padding: '40px 30px',
        fontSize: '18px',
    }
}));