import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  const ErrorDiv= styled.div`
  width:100vw;
  height:90vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-image: url(/src/assets/5312f22d981305e023cee992b367813c.jpg);
  `
  return (
    <ErrorDiv>
        <h1 className="p-1 bg-warning border border-light rounded-4">Error 404 Not Found. <Link to="/parte1">Volver a la página principal</Link></h1>
    </ErrorDiv>
    );
}
 
export default ErrorPage;