import { storiesOf } from '@storybook/vue';

import WdInput from '../src/WdInput.vue';
import WdInputBootstrap from '../src/WdInputBootstrap.vue';
// import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';

storiesOf('WdInput', module)
  .add('Basic', () => ({
    components: { WdInput }, 
    data() { return { value: 5 } },
    template: `
    <div style="width:500px;">
      <wd-input v-model="value" />
      </div>`
  }))
  .add('Bootstrap', () => ({
    components: { WdInputBootstrap },
    data() { return { value: 3 } },
    template: `
    <div style="width:500px;">
      <wd-input-bootstrap v-model="value" />
    </div>`
  }));