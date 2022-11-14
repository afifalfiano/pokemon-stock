/* eslint-disable testing-library/no-node-access */
import { render, screen,  } from '@testing-library/react';
import DataTable from './DataTable';
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));
describe('renders component data table', () => {

 it('should not render list anything either on header or body' , () => {
    render(<DataTable dataRow={[]} dataHeader={[]} title="home" />);
    const linkElement = screen.getByTestId('data-table');
    expect(linkElement.children[0].children.length).toEqual(0); // for header
    expect(linkElement.children[1].children.length).toEqual(0); // for row
 })

 it('should not render list on mobile screen', () => {
    render(<DataTable dataRow={[]} title="detail-pokemon-mobile" />);
    const linkElement = screen.getByTestId('data-table');
    expect(linkElement.children[0].children.length).toEqual(0); // for header
 })
});
