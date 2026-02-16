export function formatBytes(bytes: number) {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];

  let value = bytes;
  let unitIndedx = 0;

  while (value >= 1024 && unitIndedx < units.length - 1) {
    value /= 1024;
    unitIndedx++;
  }

  return `${value.toFixed(1)} ${units[unitIndedx]}`;
}
