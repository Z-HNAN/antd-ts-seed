let plugins: any[] = [];

if (process.env.NODE_ENV === 'development') {
  plugins = [
    ...plugins,
    /* eslint-disable-next-line */
    require('dva-logger')(),
  ];
}

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      // console.error(err.message);
    },
  },
  plugins,
}
