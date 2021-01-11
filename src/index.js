import { Button } from './components/button.js';
import { Icon } from './components/icon.js';
import { TextInput } from './components/text-input.js';
import { TextArea } from './components/text-area.js';
import { Checkbox } from './components/checkbox.js';

export {
  Button, Icon, TextInput, TextArea, Checkbox,
};

window.customElements.define('meer-button', Button);
window.customElements.define('meer-icon', Icon);
window.customElements.define('meer-text-input', TextInput);
window.customElements.define('meer-text-area', TextArea);
window.customElements.define('meer-checkbox', Checkbox);
