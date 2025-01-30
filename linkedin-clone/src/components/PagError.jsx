import Alert from "react-bootstrap/Alert";

function PagError() {
  return (
    <Alert variant="success" className=" mt-5">
      <Alert.Heading>ERROR</Alert.Heading>
      <p>La pagina non è stata trovata!</p>
    </Alert>
  );
}

export default PagError;
