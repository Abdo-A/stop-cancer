const isEnglishCharacter = (c) => {
  return c.toLowerCase() != c.toUpperCase();
};

export default isEnglishCharacter;
