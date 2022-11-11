import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    appBar: {
        borderRadius: 5,
        margin: '5px 100px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
    },
    title:{
        margin: '10px 0px 0px 10px',
    },
    textField:{
        width: '98%',
        margin: '3px 10px',
    },
    button:{
        margin: '5px',
    }
});