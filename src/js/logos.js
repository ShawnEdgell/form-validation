export function createSvgLogo() {
    // Create an SVG element
    const svgLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgLogo.setAttribute('width', '100'); // Set the width
    svgLogo.setAttribute('height', '100'); // Set the height
  
    // Create and append the actual SVG content (e.g., your "check.svg" logo)
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'path-to-your-check.svg'); // Set the path to your SVG file
  
    // Append the "use" element to the SVG element
    svgLogo.appendChild(use);
  
    return svgLogo;
  }