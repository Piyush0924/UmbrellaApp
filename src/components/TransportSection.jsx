import React from "react";
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
    link : "https://www.goindigo.in/",
    img: "https://t4.ftcdn.net/jpg/06/00/52/69/360_F_600526965_WfeE3qbs56WhV0pHBllWkzPnXAdfRAHK.jpg",
  },
];

const TransportSection = () => {
  return (
    <Container>
      {/* Navbar 
      <Navbar>
        <Logo>TransportHub</Logo>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">My Order</NavLink>
        </NavLinks>
      </Navbar>
      */}

      {/* Categories Section */}
      <Categories>
        {categories.map((cat, index) => (
          <Category key={index} onClick={() => window.open(cat.link, "_blank")}>
            <CategoryImage src={cat.img} alt={cat.name} />
            <CategoryText>{cat.name}</CategoryText>
          </Category>
        ))}
      </Categories>

      {/* Banner or Travel Image */}
      <TravelBanner>
        <TravelBannerImage
          src="https://media.licdn.com/dms/image/v2/D4D12AQFXTaupu9r60w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727262158206?e=2147483647&v=beta&t=LMgUVhl_PJOYLC023oJRh_92XphmcZ1-mUUMLviC0eU"
          alt="Travel"
        />
        <BannerText>Explore the Best Travel Deals!</BannerText>
      </TravelBanner>

      {/* Trending Deals Section */}
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

      {/* About Section */}
      <AboutSection id="about">
        <AboutTitle>About TransportHub</AboutTitle>
        <AboutText>
          TransportHub is your all-in-one platform to book and explore
          transportation options including buses, trains, flights, taxis, and
          autos. With direct access to top platforms like Uber, Ola, RedBus, and
          more – your journey begins here with convenience and speed.
        </AboutText>
      </AboutSection>
    </Container>
  );
};

export default TransportSection;

// Styled Components for CSS

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  font-family: Arial, sans-serif;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 20px 80px;
  color: white;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 40px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #f1c40f;
  }
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

const AboutSection = styled.div`
  background-color: #ffffff;
  padding: 40px 20px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const AboutText = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: #555;
  font-size: 16px;
`;
