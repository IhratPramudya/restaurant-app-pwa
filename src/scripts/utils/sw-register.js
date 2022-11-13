/* eslint-disable consistent-return */
/* eslint-disable no-console */
import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const wb = new WorkboxWindow.Workbox('/sw.bundle.js');
  try {
    await wb.register();
  } catch (error) {
    return error;
  }
};

export default swRegister;
