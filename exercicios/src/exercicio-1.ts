function maskify(str: string): string {
  return str.length > 4 ? "#".repeat(str.length - 4) + str.slice(-4) : str;
}

module.exports = maskify;
