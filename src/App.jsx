import Formulario from './componets/formulario.jsx'

function App() {
  const handleFormSubmit = (e, formData) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div>
      <Formulario onSubmit={handleFormSubmit} />
    </div>
  )
}

export default App