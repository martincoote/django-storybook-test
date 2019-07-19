import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('Test stories', module);

stories.addDecorator(withKnobs);

//Imports .html file as a string.
import test from '../test.html'

stories.add('Test', () => {
        // Converts Django template tags to js template string
        const dj_test = test.replace(/{{/g, '${').replace(/}}/g, '}');
        //Defind page context objects as JSON.
        const page = {
            title: text('Title', 'hello jed'),
            description: text(
                'Description',
                'A rain is a balloon\'s monkey. A dance sees a stepdaughter as a spacial dresser. ' +
                'A sycamore can hardly be considered a filthy walk without also being a mitten. ' +
                'Some posit the drafty beginner to be less than perished.'
            )
        };
        // Return template tag as evaluated JS (template tags are replaced with context)
        return eval('`'+dj_test+'`');
    });
