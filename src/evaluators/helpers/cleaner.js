
function cleaner(returnedValue) {
  switch (typeof returnedValue) {
    case 'string':
    case 'number':
      return returnedValue;
    case 'boolean':
      return returnedValue ? 'ᱥᱟᱨᱮ' : 'ᱜᱟᱞᱛᱤ';
    case 'object':
      if (Array.isArray(returnedValue)) return returnedValue;
  }

  throw new Error(
    ' system error: invalid result returned from helper function'
  );
}

module.exports = cleaner;
