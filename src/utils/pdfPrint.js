import html2pdf from "html2pdf.js";

export let generatePDF = (file_name) => {
  console.log("clicked");
  // Choose the element that our invoice is rendered in.
  const element = document.getElementById("preview-container");
  // Choose the element and save the PDF for our user.

  var opt = {
    margin: 0,
    filename: file_name !== "" ? `${file_name}'s Resume.pdf` : "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    // html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
};
