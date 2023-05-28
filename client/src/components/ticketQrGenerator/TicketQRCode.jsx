import React from 'react';
import QRCode from 'qrcode.react';


const TicketQRCode = ({ ticketData }) => {
    // You can generate the QR code content here, based on your ticket data
    const qrCodeContent = JSON.stringify(ticketData);
  
    return (
      <div>
        <h2>Ticket QR</h2>
        <QRCode value={qrCodeContent} />
      </div>
    );
  };
  
  export default TicketQRCode;


//this will render the QR code (SAMPLE QR Code)

  // const ticketData = {
  //   ticketId: "ABC123",
  //   libraryName: "My Library",
  //   bookingDate: "2023-05-01",
  //   startTime: "09:00 AM",
  //   endTime: "11:00 AM",
  //   customerName: "John Doe",
  //   customerEmail: "johndoe@example.com"
  // };
  // <TicketQRCode ticketData={ticketData} />
