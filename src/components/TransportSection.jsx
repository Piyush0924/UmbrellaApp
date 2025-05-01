import React, { useState } from "react";
import styled from "styled-components";

// Tickets and Categories Data
const tickets = [
  {
    type: "Bus",
    destination: "Mumbai to Pune",
    price: "₹299",
    time: "8:00 AM",
    img: "https://picsum.photos/200?bus",
  },
  {
    type: "Train",
    destination: "Delhi to Agra",
    price: "₹499",
    time: "10:30 AM",
    img: "https://picsum.photos/200?train",
  },
  {
    type: "Flight",
    destination: "Bangalore to Goa",
    price: "₹3499",
    time: "1:00 PM",
    img: "https://picsum.photos/200?flight",
  },
  {
    type: "metro",
    destination: "Bangalore to Goa",
    price: "₹3499",
    time: "1:00 PM",
    img: "https://picsum.photos/200?flight",
  },
  {
    type: "pattna",
    destination: "Bangalore to Goa",
    price: "₹3499",
    time: "1:00 PM",
    img: "https://picsum.photos/200?flight",
  },
  {
    type: "mumbai",
    destination: "mumbai to Goa",
    price: "₹3499",
    time: "1:00 PM",
    img: "https://picsum.photos/200?flight",
  },
  {
    type: "Flight",
    destination: "Bangalore to Goa",
    price: "₹3499",
    time: "1:00 PM",
    img: "https://picsum.photos/200?flight",
  },
  {
    type: "Flight",
    destination: "Bangalore to Goa",
    price: "₹3499",
    time: "1:00 PM",
    img: "https://picsum.photos/200?flight",
  },
];

const categories = [
  {
    name: "Uber",
    link: "https://www.uber.com",
    img: "https://a.storyblok.com/f/284380/1453x817/ff880bf80b/kia_ev6_air_tile.png",
  },
  {
    name: "Ola",
    link: "https://www.olacabs.com",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/e90ff525429101.Y3JvcCw0MDUwMCwzMTcwMCwwLDA.png",
  },
  {
    name: "Taxi",
    link: "https://www.megacabs.com/",
    img: "https://img.freepik.com/premium-vector/car-taxi-transport-images-with-ai-generated_545052-1033.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Auto",
    link: "https://www.rapido.bike/Home",
    img: "https://cdn.bajajauto.com/-/media/bajaj-auto/new-webp/3-wheeler/savings_calculator_image_re_new.webp",
  },
  {
    name: "Train",
    link: "https://en.wikipedia.org/wiki/Auto_rickshaw",
    img: "https://cdn.vectorstock.com/i/500p/07/59/train-vector-2470759.jpg",
  },
  {
    name: "Travers",
    link: "https://www.redbus.in/",
    img: "https://jcbl.com/jcbl-images/products/school-bus/school-bus-front-1.jpg",
  },
  {
    name: "Aeroplane",
    link: "https://www.goindigo.in/",
    img: "https://t4.ftcdn.net/jpg/06/00/52/69/360_F_600526965_WfeE3qbs56WhV0pHBllWkzPnXAdfRAHK.jpg",
  },
 
];

const TransportSection = () => {
  return (
    <Container>
      {/* Categories Section */}
      <Categories>
        {categories.map((cat, index) => (
          <Category key={index} onClick={() => window.open(cat.link, "_blank")}>
            <CategoryImage src={cat.img} alt={cat.name} />
            <CategoryText>{cat.name}</CategoryText>
          </Category>
        ))}
      </Categories>

      {/* Travel Banner */}
      <TravelBanner>
        <TravelBannerImage
          src="https://media.licdn.com/dms/image/v2/D4D12AQFXTaupu9r60w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727262158206?e=2147483647&v=beta&t=LMgUVhl_PJOYLC023oJRh_92XphmcZ1-mUUMLviC0eU"
          alt="Travel"
        />
        <BannerText>Explore the Best Travel Deals!</BannerText>
      </TravelBanner>

      {/* Search Bar */}
      <SearchBar>
        <SearchInput type="text" placeholder="Search for transport..." />
        <SearchIcon>🔍</SearchIcon>
      </SearchBar>

      {/* Ticket Deals */}
      <SectionTitle>Trending Transport Deals</SectionTitle>
      <CardsContainer>
        {tickets.map((ticket, index) => (
          <Card key={index}>
            <CardImage src={ticket.img} alt={ticket.type} />
            <CardTitle>{ticket.type} Ticket</CardTitle>
            <CardDetails>
              <strong>Destination:</strong> {ticket.destination}
            </CardDetails>
            <CardDetails>
              <strong>Price:</strong> {ticket.price}
            </CardDetails>
            <CardDetails>
              <strong>Time:</strong> {ticket.time}
            </CardDetails>
            <BookButton>Book Now</BookButton>
          </Card>
        ))}
      </CardsContainer>

      {/* FAQ Section */}
      <FAQSection id="faq">
        <FAQTitle>FAQ</FAQTitle>
        <FAQItem>
          <Question onClick={() => toggleAnswer(0)}>1. How can I book a ticket?</Question>
          <Answer id="answer0">You can book a ticket by selecting your preferred transport option (bus, train, or flight) on our website, choosing your destination, and clicking the "Book Now" button. You will be prompted to enter your payment details and complete the booking process.</Answer>
        </FAQItem>
        <FAQItem>
          <Question onClick={() => toggleAnswer(1)}>2. Are there any discounts available?</Question>
          <Answer id="answer1">Yes, we offer various discounts from time to time. You can check our homepage or subscribe to our newsletter for updates on available discounts. Additionally, we offer special deals for group bookings and festive seasons.</Answer>
        </FAQItem>
        <FAQItem>
          <Question onClick={() => toggleAnswer(2)}>3. Can I cancel my booking?</Question>
          <Answer id="answer2">Yes, you can cancel your booking. Depending on the transport service, cancellation policies may vary. Generally, you can cancel your ticket up to 24 hours before departure to receive a full refund. Please check the cancellation policy on the booking page for more details.</Answer>
        </FAQItem>
        <FAQItem>
          <Question onClick={() => toggleAnswer(3)}>4. Do I need an account to book tickets?</Question>
          <Answer id="answer3">No, you do not need an account to book tickets. You can book tickets as a guest. However, creating an account allows you to track your bookings, receive special offers, and access faster checkout for future bookings.</Answer>
        </FAQItem>
      </FAQSection>
    </Container>
  );
};

// Toggle answer visibility
const toggleAnswer = (index) => {
  const answer = document.getElementById(`answer${index}`);
  answer.style.display = answer.style.display === "block" ? "none" : "block";
};

export default TransportSection;

// Styled Components
const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  font-family: Arial, sans-serif;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px 20px;
  background-color: #ffffff;
`;

const Category = styled.div`
  width: 120px;
  text-align: center;
  cursor: pointer;
`;

const CategoryImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
  transition: transform 0.3s;
`;

const CategoryText = styled.p`
  font-weight: 600;
`;

const TravelBanner = styled.div`
  position: relative;
  text-align: center;
  margin-top: 40px;
`;

const TravelBannerImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 40px;
  font-size: 28px;
  color: #2c3e50;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%; /* Change this value to adjust the width */
  max-width: 600px;
  margin: 5% auto 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 20px;
  outline: none;
  background-color: #f1f1f1;
`;

const SearchIcon = styled.span`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background: #fff;
  width: 250px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 15px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  color: #333;
`;

const CardDetails = styled.p`
  font-size: 14px;
  color: #555;
`;

const BookButton = styled.button`
  background-color: #3498db;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
`;

// FAQ Styled Components
const FAQSection = styled.div`
  background-color: #ffffff;
  padding: 40px 20px;
  text-align: left;
  max-width: 900px;
  margin: 0 auto;
`;

const FAQTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 30px;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Question = styled.h4`
  font-size: 18px;
  color: #34495e;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #3498db;
  }
`;

const Answer = styled.p`
  font-size: 16px;
  color: #555;
  margin-left: 10px;
  display: none;
`;

