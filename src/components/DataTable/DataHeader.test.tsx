/* eslint-disable testing-library/no-node-access */
import { render, screen,  } from '@testing-library/react';
import DataHeader from './DataHeader';

describe('renders component data header', () => {

 it('should have two children div' , () => {
    render(<DataHeader data={["Waktu", "Data"]}/>);
    const linkElement = screen.getByTestId('table-header');
    expect(linkElement.children.length).toEqual(2);
 })

 it('should have first children div is Waktu', () => {
    render(<DataHeader data={["Waktu", "Data"]}/>);
    const linkElement = screen.getByTestId('table-header');
    expect(linkElement.children[0].textContent).toEqual("Waktu");
 })

 it('should have last children div is Data', () => {
    render(<DataHeader data={["Waktu", "Data"]}/>);
    const linkElement = screen.getByTestId('table-header');
    const index = linkElement.children.length - 1;
    expect(linkElement.children[index].textContent).toEqual("Data");
 })

 it('should dont have children Stok', () => {
    render(<DataHeader data={["Waktu", "Data"]}/>);
    const linkElement = screen.getByTestId('table-header');
    for (let index = 0; index < linkElement.children.length; index++) {
        expect(linkElement.children[index].textContent).not.toEqual('Stok');
    }
 })
});
