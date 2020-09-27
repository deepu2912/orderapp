import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default class Qrcode extends Component {
    downloadQR=()=>{
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
    }

    render() {
        return (
            <>
            <div className="centered"> 
            <div className="container" id="divToPrint"> 
                <img src="img/qrcode_template.jpg" className="qrcodeimg"  alt="Qr Code"></img>
                <div className="row qrcodediv" >
                <QRCode value="https://easy-order.netlify.com/getstarted/1/1" size={290}   className="qrcode"   />
                </div>
            </div>
               
               <div className="row" style={{"float":"right"}}>
               <a onClick={this.downloadQR} className="btn btn-primary"> Download QR </a>
               </div>
            </div>
               
            </>

        )
    }
}
