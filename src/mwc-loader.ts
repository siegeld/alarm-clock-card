// Safe loader for Material Web Components
// Prevents duplicate registration errors in Home Assistant

// Check if mwc-button is already defined before importing
if (!customElements.get('mwc-button')) {
  import('@material/mwc-button');
}