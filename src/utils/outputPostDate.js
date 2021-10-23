export default function outputPostDate(date) {
  return `${date.toLocaleTimeString().slice(0, 5)} ${date.toLocaleDateString()}`
}
