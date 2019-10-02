const style = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    color: '#FAFCFE'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    boxShadow: 'none'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: '50'
  },
  name: {
    marginTop: theme.spacing(1)
  },
  specification: {
    color: '#D9D8DB'
  },
  aboutas: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#B9B9BA',
    boxShadow: '1px 1px 3px 1px #D9D8DB'
  }
});

export default style;
