import { storiesOf } from '@storybook/html';

//Imports .html file as a string.
import test from '../test.html'

storiesOf('Test', module)
    .add('Test', () => {
        // Converts Django template tags to js template string
        const dj_test = test.replace(/{{/g, '${').replace(/}}/g, '}');
        //Defind page context objects as JSON.
        const page = {
            title: 'hello jed',
            description: 'A rain is a balloon\'s monkey. A dance sees a stepdaughter as a spacial dresser. A sycamore can hardly be considered a filthy walk without also being a mitten. Some posit the drafty beginner to be less than perished.'
        };
        // Return template tag as evaluated JS (template tags are replaced with context)
        return eval('`'+dj_test+'`');
    });