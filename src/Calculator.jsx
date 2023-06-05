import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Components/Navbars";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import jsPDF from 'jspdf';

function Calculator() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });

  const generatePDF = () => {
    // Create a new PDF document
    var doc = new jsPDF();

    // Add text to the document
    doc.text(10, 10, `Home Value: ${data.homeValue}`);
    doc.text(10, 20, `Down Payment: ${data.downPayment}`);
    doc.text(10, 30, `Loan Amount: ${data.loanAmount}`);
    doc.text(10, 40, `Loan Term: ${data.loanTerm}`);
    doc.text(10, 50, `Interest Rate: ${data.interestRate}`);
    doc.text(10, 60, `Monthly Payment: ${data.monthlyPayment}`);

    // Save the PDF document
    doc.save('document.pdf');
  };

  return (
    <div>
      <Navbar />
      <h3>Mortgage Calculator !</h3>
      <div className="App">
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <SliderSelect data={data} setData={setData} />
              <TenureSelect data={data} setData={setData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Result data={data} />
              <button onClick={generatePDF}>Generate PDF</button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Calculator;
