
const computeWork = () => {
  let num;
  for(let i = 0; i <= 200000; i++) {
    if (i === 200000) {
      num = i;
    }
  }
  return num;
};

addEventListener('message', e => {
  if (e.data?.action === 'INIT') {
    const value = computeWork();
    postMessage({
      value,
    });
  }
});

