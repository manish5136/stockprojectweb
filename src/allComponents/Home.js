import React from 'react';
import { Typography, List } from 'antd';
import '../App.css';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div data-testid="home-component">
      <div style={{ backgroundColor: '#f0f0f0', padding: '40px 20px', textAlign: 'center' }}>
        <Title level={2} style={{ color: '#333' }}>Welcome to Stock Market Insights</Title>
        <Paragraph style={{ color: 'black', fontSize: '18px' }}>
          Empowering your decisions with real-time market intelligence.
        </Paragraph>
      </div>
      <div className="container" style={{ padding: '40px' }}>
        <div className="overlay">
          <div className="text">
            <Typography>
              <Paragraph style={{ color: 'white', fontSize: '16px' }}>
                Our platform is tailored to provide you with a comprehensive view of market trends and insights.
              </Paragraph>
              <Title level={3} style={{ color: 'white' }}>Discover Key Offerings:</Title>
              <List
                bordered
                dataSource={[
                  'Real-time analytics for various stock categories',
                  'Personalized dashboard creation for insightful tracking',
                  'Visualized data representation with interactive charts',
                  'Tailored settings to suit your preferences',
                ]}
                renderItem={item => <List.Item style={{ color: 'white' }}>{item}</List.Item>}
              />
              <Title level={3} style={{ color: 'white' }}>Begin Exploring Now:</Title>
              <Paragraph style={{ color: 'white', fontSize: '16px' }}>
                Dive into our features to kickstart your journey.
              </Paragraph>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
