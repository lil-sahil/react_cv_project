import html2pdf from "html2pdf.js";

export let generatePDF = () => {
  console.log("clicked");
  // Choose the element that our invoice is rendered in.
  const element = document.getElementById("preview-container");
  // Choose the element and save the PDF for our user.
  html2pdf().from(element).save();
};
