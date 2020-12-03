import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from '../../../src/components/Calculator';
import Button from '../../../src/components/Calculator/Button';

const btnProps = {
    text: '1',
    backgroundColor: '#DBE0E6',
    onClick: () => { }
}

describe('Snapshot Testing', () => {
    test('calculator snapshot', () => {
        const tree = renderer.create(<Calculator />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('button snapshot', () => {
        const tree = renderer.create(
        <Button 
            text={btnProps.text}
            backgroundColor={btnProps.backgroundColor}
            onClick={btnProps.onClick} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

})


