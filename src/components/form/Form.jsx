import { useState } from 'react';
import shortid from 'shortid';
import useLocaleStorage from 'components/hooks/useLocalStorage';

export default function Form() {
  const [name, setName] = useLocaleStorage('email', '');
  const [surname, setSurname] = useLocaleStorage('surname', '');
  const [experience, setExperience] = useState('junior');
  const [license, setLicense] = useState(true);

  const nameInputId = shortid.generate();
  const surnameInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'surname':
        setSurname(value);
        break;
      default:
        return;
    }
  };

  return (
    <form>
      <label htmlFor={nameInputId}>
        Ім'я
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <br />
      <label htmlFor={surnameInputId}>
        Прізвище
        <br />
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={handleChange}
          id={surnameInputId}
        />
      </label>
      {/* <p>Ваш уровень:</p>
      <label>
        <input
          type="radio"
          name=""
          value="junior"
          onChange={this.handleChange}
          checked={this.state.experience === 'junior'}
        />
      </label>
      <label>
        <input
          type="radio"
          name=""
          value="middle"
          onChange={this.handleChange}
          checked={this.state.experience === 'middle'}
        />
      </label>
      <label>
        <input
          type="radio"
          name=""
          value="senior"
          onChange={this.handleChange}
          checked={this.state.experience === 'senior'}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="license"
          checked={this.state.license}
          onChange={this.handleLicenseChange}
        />
        agree with condition
      </label> */}
      <button type="submit" disabled={!license}>
        Надіслати
      </button>
    </form>
  );
}

// class OldForm extends Component {
//   state = {
//     name: '',
//     surname: '',
//     experience: 'junior',
//     license: false,
//   };
//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   handleLicenseChange = event => {
//     console.log(event.currentTarget.checked);
//     this.setState({ license: event.currentTarget.checked });
//   };
//   reset = () => {
//     this.setState({ name: '', surname: '' });
//   };

//   nameInputId = shortid.generate();
//   surnameInputId = shortid.generate();
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//           Ім'я
//           <br />
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             id={this.nameInputId}
//           />
//         </label>
//         <br />
//         <label htmlFor={this.surnameInputId}>
//           Прізвище
//           <br />
//           <input
//             type="text"
//             name="surname"
//             value={this.state.surname}
//             onChange={this.handleChange}
//             id={this.surnameInputId}
//           />
//         </label>
//         <p>Ваш уровень:</p>
//         <label>
//           <input
//             type="radio"
//             name=""
//             value="junior"
//             onChange={this.handleChange}
//             checked={this.state.experience === 'junior'}
//           />
//         </label>
//         <label>
//           <input
//             type="radio"
//             name=""
//             value="middle"
//             onChange={this.handleChange}
//             checked={this.state.experience === 'middle'}
//           />
//         </label>
//         <label>
//           <input
//             type="radio"
//             name=""
//             value="senior"
//             onChange={this.handleChange}
//             checked={this.state.experience === 'senior'}
//           />
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="license"
//             checked={this.state.license}
//             onChange={this.handleLicenseChange}
//           />
//           agree with condition
//         </label>
//         <button type="submit" disabled={!this.state.license}>
//           Надіслати
//         </button>
//       </form>
//     );
//   }
// }
// export default Form;
