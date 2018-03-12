export default function getOneRandomOption(options) {
  if (!Array.isArray(options)) return null;
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}
