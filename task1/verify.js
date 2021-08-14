const verify = (n) => {
  const str = n.toString();

  if (str.length !== 6) {
    return false;
  }

  let doesPairExist = false;

  let prev = null
  for (let i = 0; i < str.length; i++) {
    if (prev && str[i] === prev) {
      doesPairExist = true;
    }

    if (parseInt(str[i]) < parseInt(prev)) {
      return false;
    }

    prev = str[i];
  }

  return doesPairExist;
}

export default verify;
