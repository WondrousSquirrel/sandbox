import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Calculator from '../../../src/components/Calculator';
import Button from '../../../src/components/Calculator/Button';

configure({ adapter: new Adapter() });


describe('Events Testing', () => {
    const wrapper = shallow(<Calculator />);

    test('test for default value', () => {
        expect(wrapper.find('.input').length).toBeGreaterThanOrEqual(1);
    });

    test('test value buttons', () => {
        wrapper.find(Button).at(8).simulate('click');
        expect(wrapper.find('.input').text()).toBe('7');
        wrapper.find(Button).at(9).simulate('click');
        expect(wrapper.find('.input').text()).toBe('78');
        wrapper.find(Button).at(10).simulate('click');
        expect(wrapper.find('.input').text()).toBe('789');
        wrapper.find(Button).at(12).simulate('click');
        expect(wrapper.find('.input').text()).toBe('7894');
        wrapper.find(Button).at(13).simulate('click');
        expect(wrapper.find('.input').text()).toBe('78945');
        wrapper.find(Button).at(14).simulate('click');
        expect(wrapper.find('.input').text()).toBe('789456');
        wrapper.find(Button).at(16).simulate('click');
        expect(wrapper.find('.input').text()).toBe('7894561');
        wrapper.find(Button).at(17).simulate('click');
        expect(wrapper.find('.input').text()).toBe('78945612');
        wrapper.find(Button).at(18).simulate('click');
        expect(wrapper.find('.input').text()).toBe('789456123');
        wrapper.find(Button).at(20).simulate('click');
        expect(wrapper.find('.input').text()).toBe('7894561230');
        wrapper.find(Button).at(21).simulate('click');
        expect(wrapper.find('.input').text()).toBe('7894561230.');
    });

    describe('test operations', () => {

        beforeEach(() => {
            wrapper.find(Button).at(0).simulate('click');
          });

        test ('adding', () => {
            wrapper.find(Button).at(16).simulate('click'); // 1
            wrapper.find(Button).at(19).simulate('click'); // +
            wrapper.find(Button).at(17).simulate('click'); // 2
            wrapper.find(Button).at(22).simulate('click'); // =
            expect(wrapper.find('.input').text()).toBe('3');
        });

        test ('substract', () => {
            wrapper.find(Button).at(8).simulate('click'); // 7
            wrapper.find(Button).at(15).simulate('click'); // -
            wrapper.find(Button).at(13).simulate('click'); // 5
            wrapper.find(Button).at(22).simulate('click'); // =
            expect(wrapper.find('.input').text()).toBe('2');
        });

        test ('multiply', () => {
            wrapper.find(Button).at(13).simulate('click'); // 5
            wrapper.find(Button).at(11).simulate('click'); // *
            wrapper.find(Button).at(13).simulate('click'); // 5
            wrapper.find(Button).at(22).simulate('click'); // =
            expect(wrapper.find('.input').text()).toBe('25');
        });

        test ('divide', () => {
            wrapper.find(Button).at(9).simulate('click'); // 8
            wrapper.find(Button).at(3).simulate('click'); // /
            wrapper.find(Button).at(12).simulate('click'); // 4
            wrapper.find(Button).at(22).simulate('click'); // =
            expect(wrapper.find('.input').text()).toBe('2');
        });

    });

    describe('testing functions', () => {

        beforeEach(() => {
            wrapper.find(Button).at(0).simulate('click');
          });

        test ('change sign', () => {
            wrapper.find(Button).at(9).simulate('click'); // 8
            wrapper.find(Button).at(1).simulate('click'); // +/-
            expect(wrapper.find('.input').text()).toBe('-8'); // -8
        });

        test ('percentage', () => {
            wrapper.find(Button).at(2).simulate('click'); // %
            wrapper.find(Button).at(8).simulate('click'); // 7
            wrapper.find(Button).at(20).simulate('click'); // 0
            wrapper.find(Button).at(15).simulate('click'); // -
            wrapper.find(Button).at(16).simulate('click'); // 1
            wrapper.find(Button).at(20).simulate('click'); // 0
            wrapper.find(Button).at(22).simulate('click'); // =
            expect(wrapper.find('.memory').text()).toBe('%'); // check if mode is on
            expect(wrapper.find('.input').text()).toBe('63'); // 70 - (70 / 100 * 10) = %
            wrapper.find(Button).at(2).simulate('click'); // turn off
        });

        test ('add to memory', () => {
            wrapper.find(Button).at(8).simulate('click');
            wrapper.find(Button).at(7).simulate('click'); // m+
            expect(wrapper.find('.memory').text()).toBe('7');
            expect(wrapper.find('.input').text()).toBe('7');
        });

        test ('memory clear', () => {
            wrapper.find(Button).at(8).simulate('click');
            wrapper.find(Button).at(7).simulate('click'); // m+
            wrapper.find(Button).at(4).simulate('click'); // mc
            expect(wrapper.find('.memory').text()).toBe('');
            expect(wrapper.find('.input').text()).toBe('7');
        });

        test ('substract from memory', () => {
            wrapper.find(Button).at(8).simulate('click');
            wrapper.find(Button).at(7).simulate('click');
            wrapper.find(Button).at(6).simulate('click'); // m-
            expect(wrapper.find('.memory').text()).toBe('');
            expect(wrapper.find('.input').text()).toBe('7');
        });

        test ('memory recall', () => {
            wrapper.find(Button).at(8).simulate('click');
            wrapper.find(Button).at(7).simulate('click');
            wrapper.find(Button).at(20).simulate('click'); // 0
            wrapper.find(Button).at(5).simulate('click'); // mr
            expect(wrapper.find('.memory').text()).toBe('7');
            expect(wrapper.find('.input').text()).toBe('7');
        });

    })

});


