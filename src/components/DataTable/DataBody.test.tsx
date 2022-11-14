/* eslint-disable testing-library/no-node-access */
import { render, screen,  } from '@testing-library/react';
import DataBody from './DataBody';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('renders component data body', () => {
 it('should render list with name test and stok 0' , () => {
    const data = [{name: 'test', stok: 0}];
    render(<DataBody title="home" data={data}/>);
    const linkElement = screen.getByTestId('table-body-wrap');
    const index = linkElement.children.length - 1;
    const dataList = linkElement.children[index].children;
    expect(dataList[0].textContent).toEqual('test');
    expect(dataList[1].textContent).toEqual('0 pcs');
 })

 it('should render data table history transaction of pokemon', () => {
    const data = [{waktu: new Date().toLocaleDateString('id-ID', {year:"numeric",month:"2-digit", day:"2-digit"}), waktu_jam: new Date().toLocaleTimeString('id-ID'), kegiatan: 'Stok awal', catatan: 'Stok awal', jumlah: 10, total: 10}];
    render(<DataBody title="detail-pokemon" data={data}/>);
    const linkElement = screen.getByTestId('table-body-wrap');
    const index = linkElement.children.length - 1;
    const dataList = linkElement.children[index].children;
    expect(dataList[0].textContent?.split(' ')[0]).toEqual(new Date().toLocaleDateString('id-ID', {year:"numeric",month:"2-digit", day:"2-digit"}).split(' ')[0]);
    console.log(dataList[1].textContent, 'log');
    expect(dataList[1].textContent).toEqual("Stok awal");
    expect(dataList[2].textContent).toEqual("Stok awal");
    expect(dataList[3].textContent).toEqual("+10");
    expect(dataList[4].textContent).toEqual("10 pcs");
 })

 it('should not render list anything', () => {
    render(<DataBody title="home" data={[]}/>);
    const linkElement = screen.getByTestId('table-body-wrap');
    expect(linkElement.children.length).toBe(0);

    render(<DataBody title="detail-pokemon" data={[]}/>);
    expect(linkElement.children.length).toBe(0);
 })
});
