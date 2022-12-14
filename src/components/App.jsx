import ColorPicker from './colorPicker/ColorPicker.style';

// import Counter from './counter/Counter';
// import DropDown from './dropDown/DropDown';
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
export const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <DropDown /> */}
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};
