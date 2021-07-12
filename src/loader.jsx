import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const Loader = () => {
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
      }));

    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
export default Loader;

