import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Sales: 4000, Revenue: 2400 },
  { name: 'Feb', Sales: 3000, Revenue: 1398 },
  { name: 'Mar', Sales: 2000, Revenue: 9800 },
  { name: 'Apr', Sales: 2780, Revenue: 3908 },
  { name: 'May', Sales: 1890, Revenue: 4800 },
  { name: 'Jun', Sales: 2390, Revenue: 3800 },
  { name: 'Jul', Sales: 3490, Revenue: 4300 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  const handleDownloadReport = () => {
    alert("Downloading report... (This is a dummy action)");
  };

  return (
    <div>
      <div className="mb-4">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h1 className="mb-2 mb-md-0">Dashboard</h1>
          </Col>
          <Col xs={12} md={6} className="d-flex gap-2 justify-content-md-end">
            <Button variant="outline-primary" className="w-100 w-md-auto" onClick={handleDownloadReport}>Download Report</Button>
            <Button variant="danger" className="w-100 w-md-auto" onClick={handleLogout}>Log Out</Button>
          </Col>
        </Row>
      </div>

      <Row className="mb-4 g-3">
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm border-primary">
            <Card.Body>
              <Card.Title className="text-primary">Users</Card.Title>
              <Card.Text className="display-4">1,234</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm border-success">
            <Card.Body>
              <Card.Title className="text-success">Orders</Card.Title>
              <Card.Text className="display-4">567</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm border-warning">
            <Card.Body>
              <Card.Title className="text-warning">Revenue</Card.Title>
              <Card.Text className="display-4">$12,345</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm mb-4">
        <Card.Body>
            <Card.Title>Sales & Revenue Overview</Card.Title>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
