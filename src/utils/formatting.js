/**
 * Format number in Indian numbering system
 * @param {number} num - Number to format
 * @returns {string} Formatted number with commas (e.g., 1,00,000)
 */
export const formatIndianNumber = (num) => {
  if (num === undefined || num === null) return '0';
  
  // Convert to string and split at decimal point
  const [integerPart, decimalPart] = num.toString().split('.');
  
  // Handle negative numbers
  const isNegative = integerPart.startsWith('-');
  const absIntegerPart = isNegative ? integerPart.slice(1) : integerPart;
  
  // Format the integer part according to Indian system
  let formatted = '';
  const length = absIntegerPart.length;
  
  // Add the first group (1-3 digits)
  if (length <= 3) {
    formatted = absIntegerPart;
  } else {
    // Add last 3 digits
    formatted = absIntegerPart.slice(-3);
    // Add remaining digits in groups of 2
    let remaining = absIntegerPart.slice(0, -3);
    while (remaining.length > 0) {
      const group = remaining.slice(-2);
      remaining = remaining.slice(0, -2);
      formatted = group + ',' + formatted;
    }
  }
  
  // Add negative sign if needed
  if (isNegative) {
    formatted = '-' + formatted;
  }
  
  // Add decimal part if it exists
  if (decimalPart !== undefined) {
    formatted += '.' + decimalPart;
  }
  
  return formatted;
};