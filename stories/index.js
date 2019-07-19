import { storiesOf } from '@storybook/html';

//Imports .html file as a string.
import test from '../test.html'

storiesOf('Test', module)
    .add('Test', () => {
        // Converts Django template tags to js template string
        const dj_test = test.replace('{{', '${').replace('}}', '}');
        //Defind page context objects as JSON.
        const page = {
            title: 'hello jed'
        };
        // Return template tag as evaluated JS (template tags are replaced with context)
        return eval('`'+dj_test+'`');
    });