import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import config from '../config';
// import PartnerLockIcon from './PartnerLockIcon';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline',
  },
  fat: {
    fontWeight: 1100,
    textTransform: 'capitalize',
  },
  thin: {
    fontWeight: 300,
    textTransform: 'capitalize',
  },
}));

const OpenTargetsTitle = ({ name }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} variant="h6" color="inherit">
      <span className={classes.fat}>Open Targets </span>
      <span className={classes.thin}>{name}</span>
      {/* {config.isPartnerPreview ? (
        <>
          <span className={classes.thin}> - Partner Preview </span>
          <PartnerLockIcon />
        </>
      ) : null} */}
    </Typography>
  );
};

export default OpenTargetsTitle;
