import { Button } from './components/button.js';
import { Icon } from './components/icon.js';
import { TextInput } from './components/text-input.js';

export { Button, Icon, TextInput };

window.customElements.define('meer-button', Button);
window.customElements.define('meer-icon', Icon);
window.customElements.define('meer-text-input', TextInput);
